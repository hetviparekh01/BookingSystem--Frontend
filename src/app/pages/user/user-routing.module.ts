import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getAllUser',
    pathMatch:'full'
  },
  {
    path:'getAllUser',
    component:GetAllUserComponent
  },
  {
    path:'addUser',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
