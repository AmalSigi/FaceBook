import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://api-sales-app.josetovar.dev/posts/';

  constructor(private readonly http: HttpClient) {}

  public postPosts(post: any): Observable<any> {
    return this.http.post(`${this.url}/picture`, post);
  }
}
