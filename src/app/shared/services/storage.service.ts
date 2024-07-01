import { Injectable } from '@angular/core';
import { StorageKeys } from '../helpers/enum';
import { User } from '../helpers/models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  token: string | undefined;
  user: User = new User();

  constructor() {}

  getProperty(key: string) {
    const val:any = window.localStorage.getItem(key);
    if (val !== 'undefined') {
      return JSON.parse(val);
    } else {
      return val;
    }
  }

  setProperty(key: string, value: any, parse = true) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  removeAllProperties() {
    this.setToken('');
    this.user = new User();
    window.localStorage.clear();
    return true;
  }

  isAuthenticated() {
    return this.getToken() ? true : false;
  }

  setToken(token: string) {
    this.token = '';
    this.token = token;
    this.removeProperty(StorageKeys.token);
    this.setProperty(StorageKeys.token, this.token);
  }

  removeProperty(key: string) {
    window.localStorage.removeItem(key);
    return true;
  }

  getToken(): string {
    this.token = '';
    this.token = this.getProperty(StorageKeys.token);
    if (!this.token) {
      this.token = '';
    }
    return this.token;
  }

  getUser() {
    this.user = new User();
    if (this.getProperty(StorageKeys.user) != null) {
      this.user = Object.assign(this.user, this.getProperty(StorageKeys.user));
    }
    return this.user;
  }

  setUser(user: User) {
    if (!this.user) {
      this.user = new User();
    }
    this.user = Object.assign(this.user, user);
    this.setProperty(StorageKeys.user, this.user);
  }
  
}
