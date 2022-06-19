/* eslint-disable import/prefer-default-export */

// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
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
