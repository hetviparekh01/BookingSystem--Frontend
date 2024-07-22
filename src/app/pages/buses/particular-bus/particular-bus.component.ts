import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { BookingService } from 'src/app/core/services/booking.service';
import { BusScheduleService } from 'src/app/core/services/bus-schedule.service';
import { BusService } from 'src/app/core/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-particular-bus',
  templateUrl: './particular-bus.component.html',
  styleUrls: ['./particular-bus.component.scss']
})
export class ParticularBusComponent implements OnInit{
  bookSeatForm!: FormGroup;
  busScheduleId=this.activatedRouted.snapshot.paramMap.get('id') as string;
  busScheduleData:any
  ngOnInit(): void {
    this.getBusSchedule()
    this.bookSeatForm = this.fb.group({
      seatNumber: ['', Validators.required],
      bookingDate: ['', Validators.required]
    });
  }
  constructor(private bookingService:BookingService,private activatedRouted:ActivatedRoute,private fb: FormBuilder,private busSchdeuleService:BusScheduleService){}
 


  getBusSchedule(){
    this.busSchdeuleService.getBusScheduleById(this.busScheduleId).subscribe({
      next:(response:any)=>{
        console.log(response.data);
        this.busScheduleData=response.data
      }
    })
  }

  bookSeat(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, book it!"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.bookSeatForm.valid) {
          this.bookingService.addbooking({
            seatNumber: this.bookSeatForm.value.seatNumber,
            bookingDate: this.bookSeatForm.value.bookingDate,
            busSchedule: this.busScheduleId
          }).subscribe({
            next: (response: any) => {
              if(response.status){
                Swal.fire({
                  title: "Successful!",
                  text: response.message,
                  icon: "success"
                });
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
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter the proper booking details",
          });
        }
      }
    });
  }
}
