import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseApp: FirebaseApp;
  private token = '';
  private auth!: Auth;

  constructor(private router: Router) {
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

  async loginUser(email: string, password: string) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const token = await userCredentials.user.getIdToken();
      console.log('TOKEN : ', token);
      this.token = token;
      this.router.navigateByUrl('/expenses');
    } catch (err: any) {
      throw new Error(err);
    }
  }

  isAuthenticated() {
    return this.token !== '';
  }

  async userLogout() {
    await signOut(this.auth);
    this.token = '';
    this.router.navigateByUrl('/login');
  }

  getToken() {
    return this.token;
  }
}
