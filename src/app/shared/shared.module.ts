import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AddschedulerenderComponent } from './cell-renderer/addschedulerender/addschedulerender.component';



@NgModule({
  declarations: [
    DatatableComponent,
    AddschedulerenderComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent,
    AddschedulerenderComponent
  ]
})
export class SharedModule { }
