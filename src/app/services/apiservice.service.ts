import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private loginData = new BehaviorSubject('');
  currentLogin = this.loginData.asObservable();

  private sideNav = new BehaviorSubject('');
  sideNavBar = this.sideNav.asObservable();

  constructor(public http: HttpClient) { }

  public postdata(reqBody: any) {
    return this.http.post('http://localhost:5432/register', reqBody)
  }

  public logindata(reqBody: any) {
    return this.http.post('http://localhost:5432/login', reqBody)
  }

  loginUser(data: any) {
    this.loginData.next(data)
  }

  showHideNav(data: any) {
    this.sideNav.next(data)
  }




}
