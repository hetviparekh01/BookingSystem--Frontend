import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouteService } from 'src/app/core/services/route.service';
import { StationService } from 'src/app/core/services/station.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.scss'],
})
export class AddRoutesComponent implements OnInit {
  routeForm!: FormGroup;
  stationData: any;
  constructor(
    private fb: FormBuilder,
    private routeService: RouteService,
    private stationService: StationService,
    private route:Router
  ) {}
  ngOnInit(): void {
    this.routeForm = this.fb.group({
      name: ['', Validators.required],
      distance: ['', Validators.required],
      stations: this.fb.array([this.createStation(), this.createStation()]),
      stops: this.fb.array([this.createStops()]),
    });
    this.getStations();
  }

  getStations() {
    this.stationService.getStations().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.stationData = response.data;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      },
    });
  }
  get stationList(): FormArray {
    return this.routeForm.get('stations') as FormArray;
  }

  get stopList() {
    return this.routeForm.get('stops') as FormArray;
  }
  createStation() {
    return this.fb.group({
      stationId: ['', Validators.required],
    });
  }
  addStation() {
    this.stationList.push(this.createStation());
  }

  removeStation(index: number) {
    this.stationList.removeAt(index);
  }

  createStops() {
    return this.fb.group({
      fromStation: ['', Validators.required],
      toStation: ['', Validators.required],
      distancekm: ['', Validators.required],
      timeMin: ['', Validators.required],
    });
  }

  addStops() {
    this.stopList.push(this.createStops());
  }

  removeStops(index: number) {
    this.stopList.removeAt(index);
  }

  onSubmit() {
    console.log(this.routeForm.value);
    if (this.routeForm.valid) {
      this.routeService.addRoutes(this.routeForm.value).subscribe({
        next: (response: any) => {
          if (response.status) {
            Swal.fire({
              icon: 'success',
              text: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.routeForm.reset();
            this.route.navigate(['/route/getAllRoute'])
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.message,
            });
          }
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.message,
          });
        },
      });
    }
  }
}
