import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-addschedulerender',
  templateUrl: './addschedulerender.component.html',
  styleUrls: ['./addschedulerender.component.scss']
})
export class AddschedulerenderComponent implements ICellRendererAngularComp {

  params:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }
  openModal() {
   this.params.openModal(this.params.data._id);
   
  }
}
