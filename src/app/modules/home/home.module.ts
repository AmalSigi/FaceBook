import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './pages/feed/feed.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { NavComponent } from './pages/nav/nav.component';
import { HomeComponent } from './root/home.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

@NgModule({
  declarations: [HomeComponent, NavComponent, FriendsComponent, FeedComponent, AddPostComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
