import { Component } from '@angular/core';
import { PhotoService } from 'src/app/shared/photo.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  posts!: any[];
  constructor(private readonly photos: PhotoService) {
    this.posts = this.photos['photo'];
  }
}
