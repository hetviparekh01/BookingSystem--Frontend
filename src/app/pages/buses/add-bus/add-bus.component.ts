import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { BusService } from 'src/app/core/services/bus.service';
import { RouteService } from 'src/app/core/services/route.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit {

  routeData:any;
  busForm!:FormGroup
  constructor(private routeService:RouteService,private fb:FormBuilder,private busService:BusService){}
  ngOnInit(): void {
    this.getAllRoutes();
    this.busForm=this.fb.group({
      busNumber:['',Validators.required],
      route:['',Validators.required],
      amenities:['',Validators.required]
    })
  }

  getAllRoutes(){
    this.routeService.getAllRoutes().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.routeData=response.data
        }
      }
    })
  }

  onSubmit() {
      if(this.busForm.valid){
         this.busService.addBus(this.busForm.value).subscribe({
          next:(response:any)=>{
            if(response.status){
              Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }else{
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
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
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the form",
        });
      }
    } 
}
