import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"buses",
    loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./busschedule/busschedule.module').then(m => m.BusscheduleModule)
  },
  {
    path:'route',
    loadChildren:()=>import('./routes/routes.module').then(m=>m.RoutesModule)
  },
  {
    path:'station',
    loadChildren:()=>import('./station/station.module').then(m=>m.StationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
