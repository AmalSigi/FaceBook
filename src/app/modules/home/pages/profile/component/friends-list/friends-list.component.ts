import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
})
export class FriendsListComponent {
  users!: any[];
  constructor(private readonly data: UsersService) {
    this.users = this.data['users'];
  }
}
