import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService {
  constructor(private readonly http: HttpClient) {}

  public sendReq(username: any) {
    return this.http.post(
      `${environment.url}/friendships/send?username=${username}`,
      {}
    );
  }
  public acceptReq(username: any) {
    return this.http.post(
      `${environment.url}/friendships/accept?username=${username}`,
      {}
    );
  }
  public getReq() {
    return this.http.get(`${environment.url}/friendships/requests`);
  }
  public getFriend() {
    return this.http.get(`${environment.url}/friendships/`);
  }

  public getUsers() {
    return this.http.get(`${environment.url}/users`);
  }
}
