/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import * as functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

initializeApp();

const adminEmails = ['dj@dstelmach.com'];
interface CustomClaims {
  admin?: boolean;
}

export const processSignUp = functions.auth.user().onCreate(async (user) => {
  let claims: CustomClaims | undefined;
  adminEmails.every((email) => {
    if (email === user.email) {
      if (!claims) {
        claims = {};
      }
      claims.admin = true;
      return false;
    }
    return true;
  });
  if (claims) {
    return getAuth()
      .setCustomUserClaims(user.uid, claims)
      .catch((err) => {
        console.error(err);
      });
  }
  return undefined;
});

export const blockSignup = functions.auth.user().onCreate((user) => {
  let found = false;
  adminEmails.every((email) => {
    found = email === user.email;
    return !found;
  });
  if (!found) {
    return getAuth()
      .updateUser(user.uid, { disabled: true })
      .then((userRecord) =>
        console.log('Auto blocked user', userRecord.toJSON())
      )
      .catch((error) => console.log('Error auto blocking:', error));
  }
  return undefined;
});
