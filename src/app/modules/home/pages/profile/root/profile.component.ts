import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileService } from 'src/app/core/http/profile/profile.service';
import { Iprofile } from 'src/app/shared/interface/profile/Iprofile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private readonly profile: ProfileService) {}
  // public profileDetailes!: Observable<Iprofile>;
  public profileDetailes!: any;
  public showUpolod: boolean = false;
  public showEdit: boolean = false;

  public profilepic!: any;
  ngOnInit(): void {
    this.getProfileDetailes();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile('amal').subscribe((repo: any) => {
      this.profileDetailes = repo;
      this.profilepic = `https://api-sales-app.josetovar.dev/pictures/${repo.picture}`;
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
