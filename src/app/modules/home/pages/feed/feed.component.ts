import { Component, OnInit } from '@angular/core';
import { FriendshipService } from 'src/app/core/http/friendship/friendship.service';
import { PostService } from 'src/app/core/http/post/post.service';
import { UsersService } from 'src/app/shared/users.service';
import { environment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  users!: any[];
  totalPost: any[] = [];
  posts!: {};
  public showUpolod: boolean = false;
  constructor(
    private readonly frindship: FriendshipService,
    public readonly post: PostService
  ) {}

  ngOnInit() {
    this.getFrindList();
  }
  public showUpolodtemp() {
    this.showUpolod = true;
  }
  public unshowUpolodtemp(value: boolean) {
    this.showUpolod = false;
  }

  public getFrindList() {
    this.frindship.getFriend().subscribe({
      next: (respo: any) => {
        // console.log(respo);

        this.users = respo;
        this.users.forEach((item: any) => {
          item.picture = `${environment.url}/pictures/${item.picture}`;
          this.getPost(item.username, item);
        });
      },
    });
  }

  public getPost(username: any, friend: any) {
    this.post.getPost(username).subscribe({
      next: (post: any) => {
        // console.log(post);

        for (let item of post) {
          item.post.picture = `${environment.url}/pictures/${item.post.picture}`;
          item.post.created_at = this.getTime(item.post.created_at);
        }
        console.log(post);
        this.posts = { friend, post };
        // console.log(this.posts);
        this.totalPost.push(this.posts);
        // console.log(this.totalPost);
      },
    });
  }

  public getTime(time: any) {
    const now: any = new Date();
    const earlierTime: any = new Date(time);
    const timeDiff = now - earlierTime;
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let result;

    if (days > 0) {
      result = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      result = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      result = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      result = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    return result;
  }
}
