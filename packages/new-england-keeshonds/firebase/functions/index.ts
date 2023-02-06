import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const adminEmails = ['tinamomof7@charter.net', 'dman992266@gmail.com'];
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
    try {
      await admin.auth().setCustomUserClaims(user.uid, claims);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
});
