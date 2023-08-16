import { getFirestore } from 'firebase-admin/firestore';

interface AlbumControllerOauthRefreshToken {
  refreshToken: string;
  provider: string;
}

export const getAlbumControllerOAuthRefreshToken = () => {
  const db = getFirestore();
  return db
    .collection('admin')
    .doc('photos')
    .get()
    .then((doc) => {
      const data = doc?.data();
      if (!(data && data.refreshToken && data.provider)) {
        throw new Error('No valid album controller refresh token');
      }
      const { refreshToken, provider } = data;
      return { refreshToken, provider } as AlbumControllerOauthRefreshToken;
    });
};

export const setAlbumControllerOAuthRefreshToken = (
  refreshToken: string,
  provider: string
) => {
  const docData = {
    refreshToken,
    provider,
  };
  const db = getFirestore();
  return db.collection('admin').doc('photos').set(docData, { merge: true });
};
