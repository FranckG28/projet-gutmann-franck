import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Signup } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<User>('/api/auth/login', { email, password });
  }

  signup(data: Signup) {
    return this.httpClient.post<User>('/api/auth/register', data);
  }

}
