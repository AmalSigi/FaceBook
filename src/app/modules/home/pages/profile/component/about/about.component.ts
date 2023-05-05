import { Component } from '@angular/core';
import { ProfileService } from 'src/app/core/http/profile/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  profileDetailes!: any;
  constructor(private readonly profile: ProfileService) {}
  ngOnInit() {
    this.getData();
  }
  public getData() {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      console.log(repo);
    });
  }
}
