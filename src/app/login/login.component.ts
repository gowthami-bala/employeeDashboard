import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myLogin: any = FormGroup;
  constructor(public apiservice: ApiserviceService, public routing: Router) { }

  ngOnInit(): void {
    this.myLogin = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(8)])
    })
  }
  onSubmit() {
    var reqbody = {
      username: this.myLogin.value.username,
      password: this.myLogin.value.password,
    }
    this.apiservice.logindata(reqbody).subscribe((data) => {      
      console.log(data);
      
      this.routing.navigateByUrl('sidenav')
      localStorage.setItem("user",this.myLogin.value.username)
      // this.apiservice.loginUser(this.myLogin.value.username)
    })

  }
}
