import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private readonly http: HttpClient) {}

  public postComments(comments: any): Observable<any> {
    return this.http.post(`${environment.url}/comments/`, comments);
  }
}
