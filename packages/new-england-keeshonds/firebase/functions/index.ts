import { initializeApp } from 'firebase-admin/app';

import { processSignUpHandler } from './auth';

initializeApp();

export const processSignUp = processSignUpHandler;
