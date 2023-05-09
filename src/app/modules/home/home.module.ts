import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { NavComponent } from './pages/nav/nav.component';
import { HomeComponent } from './root/home.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { FriendRequestComponent } from './pages/friend-request/friend-request.component';
import { AboutComponent } from './pages/profile/component/about/about.component';
import { EditProfileComponent } from './pages/profile/component/edit-profile/edit-profile.component';
import { FriendsListComponent } from './pages/profile/component/friends-list/friends-list.component';
import { PhotosComponent } from './pages/profile/component/photos/photos.component';
import { TimelineComponent } from './pages/profile/component/timeline/timeline.component';
import { UpdateProfilePicComponent } from './pages/profile/component/update-profile-pic/update-profile-pic.component';
import { ProfileComponent } from './pages/profile/root/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FriendsComponent,
    FeedComponent,
    AddPostComponent,
    FriendRequestComponent,
    ProfileComponent,
    AboutComponent,
    PhotosComponent,
    FriendsListComponent,
    TimelineComponent,
    UpdateProfilePicComponent,
    EditProfileComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
