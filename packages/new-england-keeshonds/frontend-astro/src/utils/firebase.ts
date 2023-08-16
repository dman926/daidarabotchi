import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getFirestore, Firestore } from 'firebase/firestore';
import {
  initializeAppCheck,
  AppCheck,
  ReCaptchaV3Provider,
} from 'firebase/app-check';
import { FIREBASE_CONFIG, RECAPTCHA_SITE_KEY } from '../config';

export interface SubmitContactRequest {
  message: string;
  contact: string;
}

export interface SubmitContactResponse {}

export class Firebase {
  private static instance: Firebase;

  private app: FirebaseApp;

  private appCheck: AppCheck;

  private _auth?: Auth;

  private _storage?: FirebaseStorage;

  private _firestore?: Firestore;

  private constructor() {
    this.app = initializeApp(FIREBASE_CONFIG);
    this.appCheck = initializeAppCheck(this.app, {
      provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
  }

  private checkAppAndAppCheck(): void {
    if (!this.app) {
      throw new Error(
        'Firebase has not been initialized. Call `Firebase.getInstance()` first.'
      );
    }
  }

  /**
   * Returns an instance of the Firebase class.
   * This should be called before getting `authInstance` or `storageInstance`
   * in order to initialize Firebase the first time.
   *
   * @return {Firebase} An instance of the Firebase class.
   */
  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }

    return Firebase.instance;
  }

  public get auth(): Auth {
    this.checkAppAndAppCheck();
    if (!this._auth) {
      this._auth = getAuth(this.app);
    }
    return this._auth;
  }

  public get storage(): FirebaseStorage {
    this.checkAppAndAppCheck();
    if (!this.app) {
      throw new Error(
        'Firebase Storage has not been initialized. Call `Firebase.getInstance()` first.'
      );
    }
    if (!this._storage) {
      this._storage = getStorage(this.app);
    }
    return this._storage;
  }

  public get firestore(): Firestore {
    this.checkAppAndAppCheck();
    if (!this.app) {
      throw new Error(
        'Firebase Functions has not been initialized. Call `Firebase.getInstance()` first.'
      );
    }
    if (!this._firestore) {
      this._firestore = getFirestore(this.app);
    }
    return this._firestore;
  }
}

export default Firebase;
