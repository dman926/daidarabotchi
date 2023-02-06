import * as functions from 'firebase-functions';
import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from '../new-england-keeshonds-firebase-adminsdk.json';

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

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
      await getAuth().setCustomUserClaims(user.uid, claims);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
});
