import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {DestinationComponent} from "./destination/destination.component";
import {DestinationDetailComponent} from "./destination-detail/destination-detail.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: 'profile',
   component: ProfileComponent,
   canActivate: [AuthGuard]
 },
  {
   path: 'destinations',
   component: DestinationComponent,
 },
  {
   path: 'destination/:id',
   component: DestinationDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
