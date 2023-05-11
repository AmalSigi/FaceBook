import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '@profileservice/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public profileDetailes!: any;
  public username: any;
  constructor(
    private readonly profile: ProfileService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params: { [username: string]: string }) => {
        this.username = params['username'];
        if (this.username) {
          this.friendProfile(this.username);
        } else {
          this.getData();
        }
      }
    );
  }
  public getData() {
    this.profile.getProfile().subscribe((repo: any) => {
      this.profileDetailes = repo;
      console.log(repo);
    });
  }

  public friendProfile(username: any) {
    this.profile.getProfileByUsername(username).subscribe({
      next: (repo: any) => {
        console.log(repo);
        this.profileDetailes = repo;
      },
    });
  }
}
