import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  login: string;
  name: string;
  avatar_url: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backendUrl = 'http://localhost:8080/auth/github';

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  authenticateWithGitHub(code: string) {
    return this.http.post<User>(this.backendUrl, { code });
  }

  setUser(user: User) {
    this.userSubject.next(user);
    this.loggedInSubject.next(true);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.userSubject.next(null);
    this.loggedInSubject.next(false);
    localStorage.removeItem('user');
  }
}
