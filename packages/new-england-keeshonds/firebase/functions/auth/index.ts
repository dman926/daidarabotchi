import { HttpsError, beforeUserCreated } from 'firebase-functions/v2/identity';
import { error } from 'firebase-functions/logger';

import { ADMIN_EMAILS, ALBUM_CONTROLLER } from '../util/constants';
import { setAlbumControllerOAuthRefreshToken } from '../util/firestore';

export const processSignUpHandler = beforeUserCreated(
  { refreshToken: true },
  async (event) => {
    const { data, credential } = event;
    const { email, emailVerified } = data;
    const { providerId, refreshToken } = credential || {};
    const isGoogleOAuth = providerId === 'google.com';
    const isAdminEmail = email && ADMIN_EMAILS.has(email);
    const isAlbumController = email === ALBUM_CONTROLLER;

    // Have to be an admin to be allowed
    if (!(isGoogleOAuth && isAdminEmail)) {
      throw new HttpsError('permission-denied', 'Unauthorized email');
    }

    if (isAlbumController && refreshToken) {
      try {
        await setAlbumControllerOAuthRefreshToken(refreshToken, 'google.com');
      } catch (err) {
        error('Error writing admin refresh token to Firestore', err);
      }
    }

    const claims: { emailVerified?: boolean } = {};
    if (!emailVerified) {
      claims.emailVerified = true;
    }
    return {
      ...claims,
      customClaims: {
        admin: true,
      },
    };
  }
);
