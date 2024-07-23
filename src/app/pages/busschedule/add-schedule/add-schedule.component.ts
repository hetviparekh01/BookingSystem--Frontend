import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { response } from 'express';
import { BusService } from 'src/app/core/services/bus.service';
import { AddschedulerenderComponent } from 'src/app/shared/cell-renderer/addschedulerender/addschedulerender.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit {
  ngOnInit(): void {
    this.getAllBuses()
  }
  constructor(private busService: BusService) { }
  busData: any;
  colDefs: ColDef[] = [
    { headerName: 'Bus Number', field: 'busNumber', flex: 3 },
    { headerName: 'Route Name', field: 'routeDetail.name', flex: 3 },
    { headerName: 'Amenities', field: 'amenities', flex: 3 },
    { headerName: 'Seating Capacity', field: 'seatingCapacity', flex: 3 },
    {
      headerName: 'Action', field: '', cellRenderer: AddschedulerenderComponent, cellRendererParams: {
        openModal: (id: string) => this.openModal(id)
      }
    }
  ]

  openModal(id: string) {
    this.busService.getBusById(id).subscribe({
      next:(response:any)=>{
        console.log(response.data);
      } 
    })
  }
  getAllBuses() {
    this.busService.getAllBuses().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.busData = response.data
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
        });
      }
    })
  }
}
