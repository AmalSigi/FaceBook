import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { UsersService } from 'src/app/shared/users.service';
import { environment } from 'src/enviroment/enviroment';
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
    private readonly route: Router,
    private readonly profile: ProfileService
  ) {
    this.users = this.data['users'];
  }

  ngOnInit() {
    this.getProfileDetailes();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      this.profilepic = `${environment.url}/pictures/${repo.picture}`;
    });
  }

  public logOut() {
    localStorage.setItem('access_token', '');
    this.route.navigate(['/login']);
  }
}
