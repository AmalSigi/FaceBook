import { NgModule } from '@angular/core';
import { AboutComponent } from './component/about/about.component';
import { PhotosComponent } from './component/photos/photos.component';
import { ProfileComponent } from './root/profile.component';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FriendsListComponent } from './component/friends-list/friends-list.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { UpdateProfilePicComponent } from './component/update-profile-pic/update-profile-pic.component';

@NgModule({
  declarations: [ProfileComponent, AboutComponent, PhotosComponent, FriendsListComponent, TimelineComponent, UpdateProfilePicComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}