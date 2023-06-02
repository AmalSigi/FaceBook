import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '@autservice/dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  constructor(
    private readonly route: Router,
    private readonly mode: DarkModeService
  ) {}
  public darkModeLoc = localStorage.getItem('dark_mode');
  public theme!: boolean;
  ngOnInit(): void {
    this.mode.getCurrentDarkMode().subscribe((value) => {
      this.theme = value;
    });
  }

  public changeMode(): void {
    if (this.darkModeLoc != 'null') {
      this.mode.toogleCurrentDarkMidea();
    }
  }
  public logOut() {
    localStorage.setItem('access_token', '');
    this.route.navigate(['/login']);
  }
}
