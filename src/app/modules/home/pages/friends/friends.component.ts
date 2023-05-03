import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  users!: any[];
  constructor(
    private readonly data: UsersService,
    private readonly route: Router
  ) {
    this.users = this.data['users'];
  }

  public logOut() {
    localStorage.setItem('access_token', '');
    this.route.navigate(['/login']);
  }
}
