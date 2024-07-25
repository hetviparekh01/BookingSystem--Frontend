import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { RouteService } from 'src/app/core/services/route.service';
import { ViewStopsComponent } from 'src/app/shared/cell-renderer/view-stops/view-stops.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-routes',
  templateUrl: './get-all-routes.component.html',
  styleUrls: ['./get-all-routes.component.scss']
})
export class GetAllRoutesComponent implements OnInit {
  routeData:any;
   colDefs: ColDef[] = [
    { headerName: 'Route Id', field: '_id', flex: 2 },
    { headerName: 'Route Name', field: 'name', flex: 2 },
    { headerName: 'Distance', field: 'distance', flex: 1 },
    { headerName: 'Stations', field: 'stationNamesStr', flex: 3 },
    { headerName: 'Action', field: '', flex: 3,cellRenderer:ViewStopsComponent,cellRendererParams:{
      viewStop:(data:any)=>this.viewStop(data)
    }},
  ];
  constructor(private routeService:RouteService){}
  viewStop(data: any) {
    console.log(data);
  }
  ngOnInit(): void {
    this.getAllRoutes()
  }
  
  getAllRoutes() {
    this.routeService.getAllRoutes().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.routeData = response.data;
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
