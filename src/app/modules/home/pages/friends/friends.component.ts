import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { environment } from '@environment/enviroment';
import { UsersService } from '@sharedservice/users.service';
import { ProfileService } from '@profileservice/profile.service';
import { FriendshipService } from '@friendshipservice/friendship.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  users!: any[];
  profileDetailes!: any;
  profilepic!: any;
  constructor(
    private readonly data: UsersService,
    private readonly frindship: FriendshipService,
    private readonly route: Router,
    private readonly profile: ProfileService
  ) {}

  ngOnInit() {
    this.getProfileDetailes();
    this.getFrindList();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      this.profilepic = `${environment.url}/pictures/${repo.picture}`;
    });
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

  public logOut() {
    localStorage.setItem('access_token', '');
    this.route.navigate(['/login']);
  }
}
