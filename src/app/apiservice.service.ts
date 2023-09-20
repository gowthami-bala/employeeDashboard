import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http:HttpClient) { }

  public postdata(reqBody:any){
    return this.http.post('http://localhost:5432/register',reqBody)
  }
}
