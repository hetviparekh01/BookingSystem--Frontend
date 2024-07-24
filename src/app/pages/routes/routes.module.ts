import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { GetAllRoutesComponent } from './get-all-routes/get-all-routes.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAllRoutesComponent,
    AddRoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    ReactiveFormsModule
  ]
})
export class RoutesModule { }
