import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from 'src/app/core/services/bus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private busService:BusService,
    private fb:FormBuilder,
    private router:Router
  ){}
  searchBusForm!:FormGroup
  queryParams={}
  busData:any
  ngOnInit(): void {
    this.searchBusForm = this.fb.group({
      fromStation: ['', Validators.compose([Validators.required])],
      toStation: ['', Validators.compose([Validators.required])]
    })
  }

  searchBus(){
      if(this.searchBusForm.valid){
        this.busService.getBuses(this.searchBusForm.value).subscribe({
          next: (response:any) => {
              if(response.status){
                console.log(response);
                this.busData=response.data
              }
          },
          error: (error) => {
            console.error(error);
          }
        })
      }
  }
  showParticularBus(busId:string){
    this.router.navigate([`/buses/particularbus/${busId}`])
  }
  
}
