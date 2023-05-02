import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { NavComponent } from './pages/nav/nav.component';
import { ProfileComponent } from './pages/profile/root/profile.component';

@NgModule({
  declarations: [HomeComponent, NavComponent, FriendsComponent, FeedComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
