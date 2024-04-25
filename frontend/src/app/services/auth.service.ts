import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<User>('/api/login', { email, password });
  }

}
