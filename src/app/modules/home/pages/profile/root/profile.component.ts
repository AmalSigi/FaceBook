import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { environment } from 'src/enviroment/enviroment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(
    private readonly profile: ProfileService,
    private activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}
  // public profileDetailes!: Observable<Iprofile>;
  public profileDetailes!: any;
  public showUpolod: boolean = false;
  public showEdit: boolean = false;
  public username: any;
  public mainProfile: boolean = true;

  public profilepic!: any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['source'];
        if (this.username) {
          this.friendProfile(this.username);
          this.mainProfile = false;
        } else {
          this.getProfileDetailes();
          this.mainProfile = true;
        }
      }
    );
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      this.profilepic = `${environment.url}/pictures/${repo.picture}`;
    });
  }

  public showUpolodtemp() {
    this.showUpolod = true;
  }
  public unshowUpolodtemp(value: boolean) {
    this.showUpolod = false;
    this.getProfileDetailes();
  }

  public showEditemp() {
    this.showEdit = true;
  }
  public unshowEdittemp(value: boolean) {
    this.showEdit = false;
    this.getProfileDetailes();
  }

  public friendProfile(username: any) {
    this.profile.getProfileByUsername(username).subscribe({
      next: (repo: any) => {
        console.log(repo);
        this.profileDetailes = repo;
        this.profilepic = `${environment.url}/pictures/${repo.picture}`;
      },
    });
  }
  public changeTimeline() {
    this.activatedRoute.queryParams.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['source'];
        console.log(this.username);
        if (this.username) {
          this.router.navigate([`/home/profile/timeline/${this.username}`], {
            queryParams: { source: `${this.username}` },
          });
        } else {
          this.router.navigate([`/home/profile/timeline`]);
        }
      }
    );
  }

  public changeAbout() {
    this.activatedRoute.queryParams.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['source'];
        console.log(this.username);
        if (this.username) {
          this.router.navigate([`/home/profile/about/${this.username}`], {
            queryParams: { source: `${this.username}` },
          });
        } else {
          this.router.navigate([`/home/profile/about`]);
        }
      }
    );
  }

  public changePhoto() {
    this.activatedRoute.queryParams.subscribe(
      (params: { [source: string]: string }) => {
        this.username = params['source'];
        console.log(this.username);
        if (this.username) {
          this.router.navigate([`/home/profile/photos/${this.username}`], {
            queryParams: { source: `${this.username}` },
          });
        } else {
          this.router.navigate([`/home/profile/photos`]);
        }
      }
    );
  }
}
