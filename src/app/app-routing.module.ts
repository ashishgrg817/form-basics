import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';
import { AddUserInfoComponent } from './add-user-info/add-user-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-user-info',
    pathMatch: 'full'
  },
  {
    path: 'add-user-info',
    component: AddUserInfoComponent
  },
  {
    path: 'show-user',
    component: ShowUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
