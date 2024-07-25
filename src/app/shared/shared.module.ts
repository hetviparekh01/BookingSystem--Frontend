import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AddschedulerenderComponent } from './cell-renderer/addschedulerender/addschedulerender.component';
import { ViewStopsComponent } from './cell-renderer/view-stops/view-stops.component';



@NgModule({
  declarations: [
    DatatableComponent,
    AddschedulerenderComponent,
    ViewStopsComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent,
    AddschedulerenderComponent,
    ViewStopsComponent
  ]
})
export class SharedModule { }
