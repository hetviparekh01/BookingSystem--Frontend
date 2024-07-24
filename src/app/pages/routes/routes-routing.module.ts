import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllRoutesComponent } from './get-all-routes/get-all-routes.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getAllRoute',
    pathMatch:'full'
  },
  {
    path:'getAllRoute',
    component:GetAllRoutesComponent
  },
  {
    path:'addRoute',
    component:AddRoutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
