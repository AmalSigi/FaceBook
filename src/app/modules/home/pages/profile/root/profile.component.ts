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

  ngOnInit(): void {
    this.getProfileDetailes();
  }

  private getProfileDetailes(): void {
    this.profile.getProfile('amal').subscribe((repo: any) => {
      this.profileDetailes = repo;
    });
  }
  public showUpolodtemp() {
    this.showUpolod = true;
  }
  public unshowUpolodtemp(value: boolean) {
    this.showUpolod = false;
  }
}
