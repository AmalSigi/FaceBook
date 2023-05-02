import { Component } from '@angular/core';
import { PhotoService } from 'src/app/shared/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent {
  posts!: any[];
  constructor(private readonly photos: PhotoService) {
    this.posts = this.photos['photo'];
  }
}
