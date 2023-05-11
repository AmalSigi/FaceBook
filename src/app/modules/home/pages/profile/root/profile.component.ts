import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/enviroment/enviroment';
import { ProfileService } from '@profileservice/profile.service';

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

  public profileDetailes!: any;
  public showUpolod: boolean = false;
  public showEdit: boolean = false;
  public username: any;
  public mainProfile: boolean = true;

  public profilepic!: any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: { [username: string]: string }) => {
        this.username = params['username'];
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
    if (this.mainProfile) {
      this.showUpolod = true;
    }
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

  public checkingParams(nav: any) {
    this.activatedRoute.queryParams.subscribe(
      (params: { [username: string]: string }) => {
        this.username = params['username'];
        if (this.username) {
          this.router.navigate([`/${nav}`], {
            queryParams: { username: `${this.username}` },
          });
        } else {
          this.router.navigate([`/${nav}`]);
        }
      }
    );
  }
}
