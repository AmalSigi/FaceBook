import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from '@profileservice/profile.service';

@Component({
  selector: 'app-update-profile-pic',
  templateUrl: './update-profile-pic.component.html',
})
export class UpdateProfilePicComponent {
  @Output() childEvent = new EventEmitter<boolean>();
  public fileToUpload!: File;
  public picShowDiv: boolean = true;
  public selectedPic!: any;
  constructor(private readonly profilepic: ProfileService) {}
  public unshowUpolodtemp(): void {
    const value: boolean = false;
    this.childEvent.emit(value);
  }

  public fileImport(event: any) {
    this.fileToUpload = event.target.files[0];
    this.picShowDiv = false;
    const pic = new FileReader();
    pic.readAsDataURL(this.fileToUpload);
    pic.onload = () => {
      this.selectedPic = pic.result;
    };
  }

  public uploadFileToActivity() {
    this.profilepic.postProfilePicture(this.fileToUpload).subscribe({
      next: () => {
        // this.toastr.import();
        this.unshowUpolodtemp();
        console.log('done');
      },
      error: () => {},
      complete: () => {},
    });
  }
}
