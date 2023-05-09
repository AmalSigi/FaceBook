import { Component, OnInit } from '@angular/core';
import { TosterService } from 'src/app/core/authentication/service/toster.service';

import { FriendshipService } from 'src/app/core/http/friendship/friendship.service';
import { environment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
})
export class FriendRequestComponent implements OnInit {
  request!: any[];
  user!: any[];
  constructor(private readonly frindship: FriendshipService) {}
  ngOnInit(): void {
    this.requestList();
    this.getUsersList();
  }

  public requestList() {
    this.frindship.getReq().subscribe((repo: any) => {
      this.request = repo;
    });
  }

  public getUsersList() {
    this.frindship.getUsers().subscribe({
      next: (respo: any) => {
        console.log(respo);
        this.user = respo;
        this.user.forEach((item: any) => {
          item.picture = `${environment.url}/pictures/${item.picture}`;
        });
        console.log(this.user);
      },
    });
  }

  public accpet(username: any) {
    this.frindship.acceptReq(username).subscribe({
      next: () => {
        this.requestList();
      },
      error: () => {},
      complete: () => {},
    });
  }

  public addFriend(username: any) {
    this.frindship.sendReq(username).subscribe({
      next: (repo: any) => {
        console.log('add');
      },
    });
  }
}
