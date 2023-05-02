import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  users!: any[];
  constructor(private readonly data: UsersService) {
    this.users = this.data['users'];
  }

  ngOnint() {
    console.log(this.users);
  }
}
