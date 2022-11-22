import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

import user from '../../mock-backend/registered_user.json';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _isLoggedIn: boolean = false;
  authSub: Subject<boolean> = new Subject<boolean>();
  mockUser: User = {
    username: user.username,
    email: user.email,
    password: user.password
  }
  constructor() {}

  getAuthStatus(): boolean {
    this._isLoggedIn = localStorage.getItem('isLoggedIn') === "true" ? true : false;
    return this._isLoggedIn;
  }

  updateAuthStatus(value: boolean) {
    this._isLoggedIn = value;
    this.authSub.next(this._isLoggedIn);
    localStorage.setItem('isLoggedIn', value ? "true": "false");
  }

  loginUser(username: string, password: string, email: string = ''
    ) {
    // we've been sent email
    // that means we're registering a new user.
    if(email.length) {
      // Register new user
      return of({status: 200, message: `Success: ${username}, Welcome to the Incident Tracker`});
    }

    if(this.mockUser.username === username && this.mockUser.password === password) {
      return of({status: 200, message: `Success: ${username}, Welcome back to the Incident Tracker`});
    }

    return of({status: 401, message: `Error: Invalid credentials`})

  }

  logoutUser() {
    this._isLoggedIn = false;
    this.authSub.next(this._isLoggedIn);
    localStorage.removeItem('isLoggedIn')
  }
}
