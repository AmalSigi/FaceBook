import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor() {}

  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dob: new FormControl('11-11-11', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  public signUp(): void {
    const body = this.registerForm.value;
    console.log(body);
  }
}
