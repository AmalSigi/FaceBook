import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/http/post/post.service';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { PhotoService } from 'src/app/shared/photo.service';
import { environment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {
  public username: any;
  public postDetailes: any[] = [];
  public userDetailes: any = [];
  public photo!: any[];
  constructor(
    private readonly profile: ProfileService,
    private readonly post: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['username'];
        if (this.username) {
          this.friendProfile(this.username);
          this.getPostItems(this.username);
        } else {
          this.getProfileDetailes();
        }
      }
    );
  }

  // public getProfileDetailes() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params);
  //     // this.username = params['username'];
  //     console.log(this.username);
  //   });
  // }

  public friendProfile(username: any) {
    this.profile.getProfileByUsername(username).subscribe({
      next: (repo: any) => {
        console.log(repo);
        this.userDetailes = repo;
        this.userDetailes.picture = `${environment.url}/pictures/${repo.picture}`;
      },
    });
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      console.log(repo);
      this.userDetailes = repo;
      this.userDetailes.picture =
        `${environment.url}/pictures/` + this.userDetailes.picture;
      this.username = repo.username;
      this.getPostItems(this.username);
    });
  }

  public getPostItems(username: any) {
    this.post.getPost(username).subscribe((respo: any) => {
      this.postDetailes = respo;
      console.log(respo);
      this.postDetailes.forEach((item: any) => {
        item.post.picture = `${environment.url}/pictures/` + item.post.picture;
        item.post;
      });
    });
  }
}
