import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private readonly router: Router) {}

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
    // this.http.login(body).subscribe((response: any) => {
    //   if (response) {
    //     localStorage.setItem(
    //       'access_token',
    //       JSON.stringify(response.access_token)
    //     );

    //     this.router.navigate(['./dashboard/overView']);
    //   }
    // });
  }
}
