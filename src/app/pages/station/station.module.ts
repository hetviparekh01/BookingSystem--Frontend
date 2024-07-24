import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { GetAllStationsComponent } from './get-all-stations/get-all-stations.component';
import { AddStationComponent } from './add-station/add-station.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAllStationsComponent,
    AddStationComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StationModule { }
