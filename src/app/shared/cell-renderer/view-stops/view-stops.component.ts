import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-view-stops',
  templateUrl: './view-stops.component.html',
  styleUrls: ['./view-stops.component.scss']
})
export class ViewStopsComponent implements ICellRendererAngularComp {

  params:any
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }
  viewStop() {
    this.params.viewStop(this.params.data)
  }

}
