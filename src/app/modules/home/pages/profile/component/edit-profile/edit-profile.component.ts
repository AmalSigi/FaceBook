import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '@profileservice/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {
  public userDetailes: any = [];
  @Output() childEvent = new EventEmitter<boolean>();
  public editShowdiv: boolean = true;

  constructor(private readonly profile: ProfileService) {}

  public editForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.getProfileDetailes();
  }

  public getProfileDetailes(): void {
    this.profile.getProfile().subscribe((repo: any) => {
      this.editForm.setValue(repo);
    });
  }

  public update() {
    this.profile.postProfile(this.editForm.value).subscribe((respo: any) => {
      if (respo) {
      }
      this.unshowEdittemp();
    });
  }
  public unshowEdittemp(): void {
    const value: boolean = false;
    this.childEvent.emit(value);
  }
}
