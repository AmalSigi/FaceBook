import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FriendsListComponent } from './component/friends-list/friends-list.component';
import { PhotosComponent } from './component/photos/photos.component';
import { ProfileComponent } from './root/profile.component';
import { TimelineComponent } from './component/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: TimelineComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
