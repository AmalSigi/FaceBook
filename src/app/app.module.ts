import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './modules/feed/feed/feed.component';
import { FriendsComponent } from './modules/friends/friends/friends.component';
import { NavComponent } from './modules/nav/nav/nav.component';
import { LoginComponent } from './modules/auth/login/login/login.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FriendsComponent, FeedComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
