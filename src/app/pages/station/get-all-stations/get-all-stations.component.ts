import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { StationService } from 'src/app/core/services/station.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-stations',
  templateUrl: './get-all-stations.component.html',
  styleUrls: ['./get-all-stations.component.scss']
})
export class GetAllStationsComponent implements OnInit {
  stationData:any;
  colDefs:ColDef[]=[
    { headerName: 'Station Name', field: 'name', flex: 3 },
    { headerName: 'Created At', field: 'createdAt', flex: 3 },
  ]
  constructor(private http:HttpClient,private stationService:StationService){}
  ngOnInit(): void {
    this.getStations()
  }

    getStations(){
      this.stationService.getStations().subscribe({
        next:(response:any)=>{
          if(response.status){
            this.stationData=response.data
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
