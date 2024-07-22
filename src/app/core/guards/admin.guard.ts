import { CanActivateFn } from '@angular/router';
import { GetlocalstoragedataService } from '../services/getlocalstoragedata.service';
import { Location } from '@angular/common';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const ls=inject(GetlocalstoragedataService)
  const location=inject(Location)
  const userRole=ls.getUserData().role as string
  if(userRole!=='admin'){
    location.back()
    return false;
  }
  return true;
};
