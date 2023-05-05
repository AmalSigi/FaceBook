import { Component } from '@angular/core';
import { PostService } from 'src/app/core/http/post/post.service';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { environment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent {
  public username: any;
  public clickedPic: any;
  public clickcontent: any;
  public postDetailes!: any[];
  public picShow: boolean = false;
  constructor(
    private readonly profile: ProfileService,
    private readonly post: PostService // private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProfileDetailes();
  }

  // public getProfileDetailes() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params);
  //     // this.username = params['username'];
  //     console.log(this.username);
  //   });
  // }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.username = repo.username;
      this.getPostItems(this.username);
    });
  }

  public getPostItems(username: any) {
    console.log(username);

    this.post.getPost(username).subscribe((respo: any) => {
      this.postDetailes = respo;
      this.postDetailes.forEach((item: any) => {
        item.picture = `${environment.url}/pictures/` + item.picture;
      });
    });
  }

  public clickImg(picture: any, content: any) {
    this.Show();
    this.clickedPic = picture;
    this.clickcontent = content;
  }

  public Show() {
    this.picShow = true;
  }
  public close() {
    console.log('hi');
    this.picShow = false;
  }
}
