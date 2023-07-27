import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@autservice/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DarkModeService } from '@autservice/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly routers: Router,
    private readonly auth: AuthService,
    private readonly mode: DarkModeService
  ) {}
  public darkModeLoc = localStorage.getItem('dark_mode');
  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  public get controls() {
    return this.loginForm.controls;
  }
  public login() {
    const body = this.loginForm.value;
    console.log(body);
    this.auth.postLogin(body).subscribe((response: any) => {
      if (response) {
        localStorage.setItem(
          'access_token',
          JSON.stringify(response.access_token)
        );

        this.routers.navigate(['']);
      }
    });
  }

  public changeMode(): void {
    if (this.darkModeLoc != 'null') {
      this.mode.toogleCurrentDarkMode();
    }
  }
}
