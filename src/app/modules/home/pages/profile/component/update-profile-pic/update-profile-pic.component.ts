import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-profile-pic',
  templateUrl: './update-profile-pic.component.html',
  styleUrls: ['./update-profile-pic.component.scss'],
})
export class UpdateProfilePicComponent {
  @Output() childEvent = new EventEmitter<boolean>();
  public fileToUpload!: File;
  public picShowDiv: boolean = true;
  constructor() {}
  public unshowUpolodtemp(): void {
    const value: boolean = false;
    this.childEvent.emit(value);
  }

  public fileImport(event: any) {
    this.fileToUpload = event.target.files[0];
    this.picShowDiv = false;
  }

  uploadFileToActivity() {
    // this.fileUploadService.postClientFile(this.fileToUpload).subscribe({
    //   next: () => {
    //     this.toastr.import();
    //     this.getClient();
    //   },
    //   error: () => {},
    //   complete: () => {},
    // });
  }
}
