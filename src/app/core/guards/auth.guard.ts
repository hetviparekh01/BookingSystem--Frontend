import { CanActivateFn, Router } from '@angular/router';
import { GetlocalstoragedataService } from '../services/getlocalstoragedata.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const ls=inject(GetlocalstoragedataService)
  const router=inject(Router)
  if(!ls.getToken()){
    router.navigate(['/auth/login'])
     return false
  }
  return true
};
