import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { ParticularBusComponent } from './particular-bus/particular-bus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllBusesComponent } from './get-all-buses/get-all-buses.component';
import { AddBusComponent } from './add-bus/add-bus.component';


@NgModule({
  declarations: [
    ParticularBusComponent,
    GetAllBusesComponent,
    AddBusComponent
  ],
  imports: [
    CommonModule,
    BusesRoutingModule,
    ReactiveFormsModule
  ]
})
export class BusesModule { }
