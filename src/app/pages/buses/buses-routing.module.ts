import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticularBusComponent } from './particular-bus/particular-bus.component';
import { GetAllBusesComponent } from './get-all-buses/get-all-buses.component';
import { AddBusComponent } from './add-bus/add-bus.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getAllBuses',
    pathMatch:"full"
  },
  {
    path:'particularbus/:id',
    component:ParticularBusComponent
  },
  {
    path:'getAllBuses',
    component:GetAllBusesComponent
  },
  {
    path:'addBus',
    component:AddBusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule { }
