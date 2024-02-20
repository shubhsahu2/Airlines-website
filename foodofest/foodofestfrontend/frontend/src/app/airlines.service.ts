import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {


  constructor(private http:HttpClient) { }
  getAirlines():Observable<any>{
    return this.http.get('http://localhost:3000/airlines');

  }
  bookticket(bookingobj:any):Observable<any>{
    return this.http.post('http://localhost:3000/bookings',bookingobj);

  }
}
function Of():Observable<any>{
  throw new Error('Function not implemented');
}
