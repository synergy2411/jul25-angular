import { Injectable } from '@angular/core';

import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseApp: FirebaseApp;
  private token = '';
  private auth!: Auth;

  constructor() {
    this.firebaseApp = initializeApp({
      apiKey: 'AIzaSyACzpjRH3LRa1UbCp3UO5m74LO6CJf8sc8',
      authDomain: 'sk-ng-jul-25.firebaseapp.com',
    });

    this.auth = getAuth(this.firebaseApp);
  }

  async createUser(email: string, password: string) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('USER CREDENTIALS : ', userCredentials);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  loginUser(email: string, password: string) {}
}
