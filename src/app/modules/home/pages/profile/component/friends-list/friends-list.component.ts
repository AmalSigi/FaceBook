import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/enviroment';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendshipService } from '@friendshipservice/friendship.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
})
export class FriendsListComponent implements OnInit {
  users: any[] = [];
  constructor(
    private readonly frindship: FriendshipService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.getFrindList();
  }

  public getFrindList() {
    this.frindship.getFriend().subscribe({
      next: (respo: any) => {
        this.users = respo;
        this.users = this.users.filter((item, index) => {
          return (
            index ===
            this.users.findIndex((obj) => {
              return JSON.stringify(obj) === JSON.stringify(item);
            })
          );
        });
        this.users.forEach((item: any) => {
          item.picture = `${environment.url}/pictures/${item.picture}`;
        });
      },
    });
  }

  public friendProfile(username: any) {
    this.router.navigate([`/timeline`], {
      queryParams: { username: username },
    });
  }
}
