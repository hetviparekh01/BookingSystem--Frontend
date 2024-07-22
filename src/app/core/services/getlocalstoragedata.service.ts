import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetlocalstoragedataService {

  constructor() {}

  setToken(token: string) {
    localStorage.setItem('accesstoken', token);
  }
  getToken() {
    return localStorage.getItem('accesstoken');
  }
  setUserData(userData:any){
    localStorage.setItem('userData',JSON.stringify(userData))
  }
   getUserData(){
     const userData=localStorage.getItem('userData')
     return JSON.parse(userData as string)
  }
  clearLocalstorage() {
    localStorage.clear();
  }
}
