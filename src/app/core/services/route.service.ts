import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http:HttpClient) { }

  getAllRoutes(){
    return this.http.get(`/route/getRoutes`)
  }
  addRoutes(routeData:any){
    return this.http.post(`/route/addRoute`,routeData)
  }
}
