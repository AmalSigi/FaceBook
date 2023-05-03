import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly http: HttpClient) {}

  url = 'https://api-sales-app.josetovar.dev/profile';

  public postProfilePicture(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.url}/picture`, formData);
  }

  public getProfile(username: any): Observable<any> {
    return this.http.get(`${this.url}/${username}`);
  }

  public postProfile(data: any): Observable<any> {
    return this.http.post(`${this.url}/`, data);
  }
}
