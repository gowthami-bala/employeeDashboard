import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: any = FormGroup;
  constructor(public apiservice: ApiserviceService, public routing: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullname: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phonenumber: new FormControl('', [Validators.required,Validators.pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(8)]),
      confirmpassword: new FormControl('', [Validators.required,Validators.maxLength(8)]),
      gender: new FormControl('', [Validators.required])
    })
  }

  onRegister() {
    // console.log(this.myForm.value.fullname);
    var reqbody = {
      fullname: this.myForm.value.fullname,
      username: this.myForm.value.username,
      email: this.myForm.value.email,
      phonenumber: this.myForm.value.phonenumber,
      password: this.myForm.value.password,
      gender: this.myForm.value.gender
    }
    if(this.myForm.value.password === this.myForm.value.confirmpassword)
    this.apiservice.postdata(reqbody).subscribe((data: any) => {
      if (data.message) {
        this.routing.navigateByUrl('login')
      }
    })


  }

}
