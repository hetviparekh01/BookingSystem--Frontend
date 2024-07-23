import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusscheduleRoutingModule } from './busschedule-routing.module';
import { GetAllScheduleComponent } from './get-all-schedule/get-all-schedule.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    GetAllScheduleComponent,
    AddScheduleComponent
  ],
  imports: [
    CommonModule,
    BusscheduleRoutingModule,
    SharedModule
]
})
export class BusscheduleModule { }
