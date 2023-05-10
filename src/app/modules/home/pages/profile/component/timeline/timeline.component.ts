import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/core/http/comment/comment.service';
import { PostService } from 'src/app/core/http/post/post.service';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { environment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {
  public username: any;
  public postDetailes: any[] = [];
  public profilePic: any;
  public userDetailes: any = [];
  public photo!: any[];
  public commentbox: boolean = false;
  public commentboxId: any;
  constructor(
    private readonly profile: ProfileService,
    private readonly post: PostService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly comment: CommentService
  ) {}

  ngOnInit() {
    this.main();
  }

  private main() {
    this.activatedRoute.params.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['username'];
        if (this.username) {
          this.friendProfile(this.username);
          this.getPostItems(this.username);
          this.getProfilePic();
        } else {
          this.getProfileDetailes();
          this.getProfilePic();
        }
      }
    );
  }

  public friendProfile(username: any) {
    this.profile.getProfileByUsername(username).subscribe({
      next: (repo: any) => {
        this.userDetailes = repo;
        this.userDetailes.picture = `${environment.url}/pictures/${repo.picture}`;
      },
    });
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.userDetailes = repo;
      this.userDetailes.picture = `${environment.url}/pictures/${repo.picture}`;
      this.profilePic = `${environment.url}/pictures/repo.picture`;
      console.log(this.profilePic);
      this.username = repo.username;
      this.getPostItems(this.username);
    });
  }

  public getProfilePic() {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profilePic = `${environment.url}/pictures/` + repo.picture;
    });
  }

  public getPostItems(username: any) {
    this.post.getPost(username).subscribe((respo: any) => {
      this.postDetailes = respo;
      console.log(respo);
      this.postDetailes.forEach((item: any) => {
        item.post.picture = `${environment.url}/pictures/` + item.post.picture;
        for (let comment of item.comments) {
          comment.picture = `${environment.url}/pictures/` + comment.picture;
          comment.created_at = this.getTime(comment.created_at);
          console.log();
        }
      });
    });
  }

  public commentActive(id: any) {
    this.commentboxId = id;
    this.commentbox = !this.commentbox;
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
          this.main();
        },
      });
    }
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
