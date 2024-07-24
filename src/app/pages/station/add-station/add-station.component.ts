import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StationService } from 'src/app/core/services/station.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent implements OnInit {
  stationForm!: FormGroup<any>;
  constructor(private fb:FormBuilder,private stationService:StationService,private route:Router){}
  ngOnInit(): void {
   this.stationForm=this.fb.group({
    name:['',Validators.required]
   })
  }


  onSubmit() {
    if(this.stationForm.valid){
      this.stationService.addStation(this.stationForm.value).subscribe({
        next: (response: any) => {
          if (response.status) {
            Swal.fire({
              icon: "success",
              text: response.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.stationForm.reset();
            this.route.navigate(['/station/getAllStation'])
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill the form",
      });
    }
  }
}
