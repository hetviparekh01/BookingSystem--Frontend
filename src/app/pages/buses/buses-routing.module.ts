import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticularBusComponent } from './particular-bus/particular-bus.component';
import { AllBusesComponent } from './all-buses/all-buses.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'allbus',
    pathMatch:"full"
  },
  {
    path:'particularbus/:id',
    component:ParticularBusComponent
  },
  {
    path:'allbus',
    component:AllBusesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule { }
