import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllStationsComponent } from './get-all-stations/get-all-stations.component';
import { AddBusComponent } from '../buses/add-bus/add-bus.component';
import { AddStationComponent } from './add-station/add-station.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getAllStation',
    pathMatch:'full'
  },
  {
    path:'getAllStation',
    component:GetAllStationsComponent
  },
  {
    path:'addStation',
    component:AddStationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
