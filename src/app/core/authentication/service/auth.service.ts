import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-sales-app.josetovar.dev/auth';

  constructor(private readonly http: HttpClient) {}

  public postLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}/login`, data);
  }

  public postRegister(data: any): Observable<any> {
    return this.http.post(`${this.url}/register`, data);
  }
}
