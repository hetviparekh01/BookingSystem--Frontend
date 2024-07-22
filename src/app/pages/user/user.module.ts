import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    GetAllUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
