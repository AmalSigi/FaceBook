import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  public registerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  public signUp() {
    console.log(this.registerForm.value);
    this.auth
      .postRegister(this.registerForm.value)
      .subscribe((response: any) => {
        if (response) {
          this.router.navigate(['login']);
        }
      });
  }
}
