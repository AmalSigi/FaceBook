import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { environment } from 'src/enviroment/enviroment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(
    private readonly profile: ProfileService,
    private activatedRoute: ActivatedRoute
  ) {}
  // public profileDetailes!: Observable<Iprofile>;
  public profileDetailes!: any;
  public showUpolod: boolean = false;
  public showEdit: boolean = false;

  public profilepic!: any;
  ngOnInit(): void {
    this.getProfileDetailes();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      this.profilepic = `${environment.url}/pictures/${repo.picture}`;
    });
  }

  public showUpolodtemp() {
    console.log('wokrf');
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
}
