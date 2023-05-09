import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendshipService } from 'src/app/core/http/friendship/friendship.service';
import { UsersService } from 'src/app/shared/users.service';
import { environment } from 'src/enviroment/enviroment';

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
        console.log(respo);
        this.users = respo;
        this.users.forEach((item: any) => {
          item.picture = `${environment.url}/pictures/${item.picture}`;
        });
      },
    });
  }

  public friendProfile(username: any) {
    this.router.navigate([`/home/profile/timeline/${username}`], {
      queryParams: { source: `${username}` },
    });
  }
}
