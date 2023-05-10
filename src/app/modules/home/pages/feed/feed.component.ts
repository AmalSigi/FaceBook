import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/enviroment';
import { PostService } from '@posteservice/post.service';
import { CommentService } from '@commentservice/comment.service';
import { ProfileService } from '@profileservice/profile.service';
import { FriendshipService } from '@friendshipservice/friendship.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  users!: any[];
  totalPost: any[] = [];
  posts!: {};
  public userDetailes: any = [];
  public showUpolod: boolean = false;
  public commentbox: boolean = false;
  public profilePic: any;
  public commentboxId: any;
  constructor(
    private readonly frindship: FriendshipService,
    public readonly post: PostService,
    private readonly comment: CommentService,
    private readonly profile: ProfileService
  ) {}

  ngOnInit() {
    this.getFrindList();
    this.getProfileDetailes();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.userDetailes = repo;
      this.userDetailes.picture = this.addUrl(repo.picture);
    });
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
          item.picture = this.addUrl(item.picture);
          this.getPost(item.username, item);
        });
      },
    });
  }

  public getPost(username: any, friend: any) {
    this.post.getPost(username).subscribe({
      next: (post: any) => {
        for (let item of post) {
          item.post.picture = this.addUrl(item.post.picture);
          item.post.created_at = this.getTime(item.post.created_at);
          for (let comment of item.comments) {
            comment.picture = this.addUrl(comment.picture);
            comment.created_at = this.getTime(comment.created_at);
            console.log();
          }
        }
        this.posts = { friend, post };
        this.totalPost.push(this.posts);
      },
    });
  }

  public addUrl(imgName: any) {
    return `${environment.url}/pictures/` + imgName;
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

  public commentActive(id: any) {
    if (this.commentboxId == id) {
      this.commentbox = false;
      this.commentboxId = -1;
    } else {
      this.commentbox = true;
      this.commentboxId = id;
    }
  }

  public commentSend(post_id: number, content: string) {
    const body = {
      post_id,
      content,
    };
    if (content) {
      this.comment.postComments(body).subscribe({
        next: () => {
          console.log('true');
          this.getFrindList();
        },
      });
    }
  }
}
