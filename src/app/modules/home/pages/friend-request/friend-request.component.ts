import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/enviroment';
import { FriendshipService } from '@friendshipservice/friendship.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
})
export class FriendRequestComponent implements OnInit {
  request!: any[];
  user!: any[];
  friend!: any[];
  constructor(private readonly frindship: FriendshipService) {}
  ngOnInit(): void {
    this.requestList();
    this.getUsersList();
  }

  public requestList(): void {
    this.frindship.getReq().subscribe((repo: any) => {
      this.request = repo;

      this.request.forEach((item: any) => {
        item.sender.picture = `${environment.url}/pictures/${item.sender.picture}`;
      });
    });
  }

  public getUsersList(): void {
    this.frindship.getUsers().subscribe({
      next: (respo: any) => {
        console.log(respo);
        this.user = respo;

        this.user.forEach((item: any) => {
          item.picture = `${environment.url}/pictures/${item.picture}`;
        });
      },
    });
  }

  public accpet(username: any) {
    this.frindship.acceptReq(username).subscribe({
      next: () => {
        this.requestList();
        this.getUsersList();
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
