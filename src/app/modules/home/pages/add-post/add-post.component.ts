import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @Output() childEvent = new EventEmitter<boolean>();
  constructor() {}
  public unshowUpolodtemp(): void {
    const value: boolean = false;
    this.childEvent.emit(value);
  }
}
