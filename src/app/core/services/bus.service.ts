import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }

  getBuses(queryParams:any) {
    return this.http.post(`/bus/getbuses`,queryParams);
  }
  getBusById(busId:string){
    return this.http.get(`/bus/getBusById/${busId}`);
  }
}
