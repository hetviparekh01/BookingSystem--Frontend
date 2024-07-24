import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http:HttpClient) { }

  getStations(){
    return this.http.get<any>(`/station/getstations`)
  }
  addStation(stationData:any){
    return this.http.post(`/station/addStation`,stationData)
  }
}
