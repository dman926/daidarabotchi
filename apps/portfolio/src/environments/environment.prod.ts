/* eslint-disable import/prefer-default-export */

export const environment = {
  production: true,
  firebaseConfig: process.env['NX_PORTFOLIO_FIREBASE_CONFIG']
    ? JSON.parse(process.env['NX_PORTFOLIO_FIREBASE_CONFIG'])
    : false,
  recaptchaV3PublicKey: process.env['NX_PORTFOLIO_RECAPTCHA_V3_SITE_KEY'],
  firebaseAppCheckToken:
    process.env['NX_PORTFOLIO_FIREBASE_APPCHECK_DEGUG_TOKEN'],
  baseTheme: {
    palette: {
      mode: 'dark',
    },
  },
};
