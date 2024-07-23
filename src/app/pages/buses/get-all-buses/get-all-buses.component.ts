import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { response } from 'express';
import { BusService } from 'src/app/core/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-buses',
  templateUrl: './get-all-buses.component.html',
  styleUrls: ['./get-all-buses.component.scss']
})
export class GetAllBusesComponent implements OnInit {
  ngOnInit(): void {
    this.getAllBuses()
  }
  constructor(private busService:BusService){}
  busData:any;
  colDefs:ColDef[]=[
    { headerName: 'Bus Number', field: 'busNumber',flex:3 },
    { headerName: 'Route Name', field: 'routeDetail.name', flex: 3 },
    { headerName: 'Amenities', field: 'amenities', flex: 3 },
    { headerName: 'Seating Capacity', field: 'seatingCapacity', flex: 3 },
  ]
  getAllBuses(){
    this.busService.getAllBuses().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.busData=response.data
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
        });
      }
    })
  }
}
