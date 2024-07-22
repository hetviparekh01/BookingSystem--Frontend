import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post<any>(`/auth/signup`, userData);
  }
  login(userData:any) {
    return this.http.post<any>(`/auth/login`, userData);
  }
}
