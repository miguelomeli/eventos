import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:2900/api/login';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    // Retorna true o false si existe el token
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch(Error) {
      return 'invalidToken';
    }
  }
}
