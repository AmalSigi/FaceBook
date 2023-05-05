import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly http: HttpClient) {}

  url = 'https://api-sales-app.josetovar.dev/profile';

  public postProfilePicture(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(`${environment.url}/profile/picture`, formData);
  }

  public getProfile(): Observable<any> {
    return this.http.get(`${environment.url}/profile/`);
  }
  public getProfileByUsername(username: any): Observable<any> {
    return this.http.get(`${environment.url}/profile/${username}`);
  }

  public postProfile(data: any): Observable<any> {
    return this.http.post(`${environment.url}/profile/`, data);
  }
}
