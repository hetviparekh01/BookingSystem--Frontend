import { CanActivateFn } from '@angular/router';
import { GetlocalstoragedataService } from '../services/getlocalstoragedata.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const ls=inject(GetlocalstoragedataService)
  const location=inject(Location)
  if(ls.getToken()){
    location.back()
    return false;
  }
  return true;
};
