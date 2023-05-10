import { ElementRef, ViewChild } from '@angular/core';
import { PostService } from '@posteservice/post.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
})
export class AddPostComponent {
  @Output() childEvent = new EventEmitter<boolean>();
  @ViewChild('caption') input!: ElementRef;
  public fileToUpload!: File;
  public selectdPic!: any;
  public picShowDiv: boolean = true;
  public caption: any;
  constructor(private readonly post: PostService) {}
  public unshowUpolodtemp(): void {
    const value: boolean = false;
    this.childEvent.emit(value);
  }
  public uploadPost: FormData = new FormData();

  public fileImport(event: any) {
    this.fileToUpload = event.target.files[0];
    this.picShowDiv = false;
    const pic = new FileReader();
    pic.readAsDataURL(this.fileToUpload);
    pic.onload = () => {
      this.selectdPic = pic.result;
    };
  }

  public uploadFileToActivity() {
    this.caption = this.input.nativeElement.value;
    this.uploadPost.append('content', this.caption);
    this.uploadPost.append('file', this.fileToUpload, this.fileToUpload.name);

    console.log(this.uploadPost);
    this.post.postPosts(this.uploadPost).subscribe({
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
