import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './root/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { FriendRequestComponent } from './pages/friend-request/friend-request.component';
import { ProfileComponent } from './pages/profile/root/profile.component';
import { AboutComponent } from './pages/profile/component/about/about.component';
import { FriendsListComponent } from './pages/profile/component/friends-list/friends-list.component';
import { PhotosComponent } from './pages/profile/component/photos/photos.component';
import { TimelineComponent } from './pages/profile/component/timeline/timeline.component';
import { ActivateGuard } from 'src/app/core/authentication/guard/activate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: '',
        component: ProfileComponent,

        children: [
          {
            path: '',
            redirectTo: 'timeline',
            pathMatch: 'full',
          },

          {
            path: 'timeline',
            component: TimelineComponent,
          },
          {
            path: 'about',
            component: AboutComponent,
          },
          {
            path: 'friends',
            component: FriendsListComponent,
          },
          {
            path: 'photos',
            component: PhotosComponent,
          },
        ],
      },
      {
        path: 'fried_req',
        component: FriendRequestComponent,
      },
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      //   children: [
      //     {
      //       path: '',
      //       redirectTo: 'timeline/:username',
      //       pathMatch: 'full',
      //     },

      //     {
      //       path: 'timeline/:username',
      //       component: TimelineComponent,
      //     },
      //     {
      //       path: 'about/:username',
      //       component: AboutComponent,
      //     },
      //     {
      //       path: 'friends/:username',
      //       component: FriendsListComponent,
      //     },
      //     {
      //       path: 'photos/:username',
      //       component: PhotosComponent,
      //     },
      //   ],
      // },
    ],
    canActivateChild: [ActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
