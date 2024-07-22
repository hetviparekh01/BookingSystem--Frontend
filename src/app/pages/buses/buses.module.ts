import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { AllBusesComponent } from './all-buses/all-buses.component';
import { ParticularBusComponent } from './particular-bus/particular-bus.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllBusesComponent,
    ParticularBusComponent
  ],
  imports: [
    CommonModule,
    BusesRoutingModule,
    ReactiveFormsModule
  ]
})
export class BusesModule { }
