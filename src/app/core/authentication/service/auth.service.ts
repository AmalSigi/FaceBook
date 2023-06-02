import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileService } from '@profileservice/profile.service';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-sales-app.josetovar.dev/auth';

  constructor(
    private readonly http: HttpClient,
    private readonly profile: ProfileService
  ) {}

  public postLogin(data: any): Observable<any> {
    return this.http.post(`${environment.url}/auth/login`, data);
  }

  public postRegister(data: any): Observable<any> {
    return this.http.post(`${environment.url}/auth/register`, data);
  }

  public activate(): Observable<boolean> {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      return this.profile.getProfile().pipe(
        map((resp: any) => {
          if (resp) {
            return true;
          } else {
            return false;
          }
        }),
        catchError((error: any) => {
          return of(false);
        })
      );
    } else {
      return of(false);
    }
  }
}
