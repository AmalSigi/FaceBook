import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  public postPosts(post: any): Observable<any> {
    return this.http.post(`${environment.url}/posts/`, post);
  }

  public getPost(username: any): Observable<any> {
    return this.http.get(`${environment.url}/posts/${username}`);
  }
}
