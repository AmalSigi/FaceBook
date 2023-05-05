import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-sales-app.josetovar.dev/auth';

  constructor(private readonly http: HttpClient) {}

  public postLogin(data: any): Observable<any> {
    return this.http.post(`${environment.url}/auth/login`, data);
  }

  public postRegister(data: any): Observable<any> {
    return this.http.post(`${environment.url}/auth/register`, data);
  }
}
