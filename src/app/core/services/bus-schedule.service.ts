import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {

  constructor(private http:HttpClient) { }
  getBusScheduleById(scheduleId:string){
    return this.http.get<any>(`/busSchedule/getbusScheduleById/${scheduleId}`)
  }
  getAllSchedules(){
    return this.http.get<any>(`/busSchdedule/getbusSchedules`) 
  }
}
