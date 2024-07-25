import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { GetAllRoutesComponent } from './get-all-routes/get-all-routes.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GetAllRoutesComponent,
    AddRoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RoutesModule { }
