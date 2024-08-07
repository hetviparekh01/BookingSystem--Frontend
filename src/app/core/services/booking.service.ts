import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  addbooking(bookingData:any){
    return this.http.post(`/booking/addbooking`,bookingData)
  }
}
