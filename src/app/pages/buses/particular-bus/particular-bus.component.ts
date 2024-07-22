import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BusService } from 'src/app/core/services/bus.service';

@Component({
  selector: 'app-particular-bus',
  templateUrl: './particular-bus.component.html',
  styleUrls: ['./particular-bus.component.scss']
})
export class ParticularBusComponent implements OnInit{
  bookSeatForm!: FormGroup;
  busId=this.activatedRouted.snapshot.paramMap.get('id') as string;
  busData:any
  ngOnInit(): void {
    this.getBusById()
    this.bookSeatForm = this.fb.group({
      seatNumber: ['', Validators.required]
    });
  }
  constructor(private busService:BusService,private activatedRouted:ActivatedRoute,private fb: FormBuilder,){}
  getBusById(){
    this.busService.getBusById(this.busId).subscribe({
      next: (response:any) =>{ 
        this.busData=response.data;
      },
      error: error => console.error('Error:', error)
    })
  }

  bookSeat(): void {
    if (this.bookSeatForm.valid) {
      const seatNumber = this.bookSeatForm.value.seatNumber;

  
    } else {
    }
  }
}
