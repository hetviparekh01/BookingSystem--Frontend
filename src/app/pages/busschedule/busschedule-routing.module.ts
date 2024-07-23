import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllScheduleComponent } from './get-all-schedule/get-all-schedule.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getAllSchedule',
    pathMatch:'full'
  },
  {
    path:'getAllSchedule',
    component:GetAllScheduleComponent
  },
  {
    path:'addSchedule',
    component:AddScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusscheduleRoutingModule { }
