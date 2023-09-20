import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 myForm:any= FormGroup;
  constructor(public apiservice : ApiserviceService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullname: new FormControl(''),
      username: new FormControl(''),
      email:new FormControl(''),
      phonenumber: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(''),
      gender: new FormControl('')
    })
  }

  onRegister(){
    console.log(this.myForm.value.fullname);
    var reqbody={
      fullname: this.myForm.value.fullname,
      username: this.myForm.value.username,
      email: this.myForm.value.email,
      phonenumber: this.myForm.value.phonenumber,
      password: this.myForm.value.password,
      gender: this.myForm.value.gender
    }
    this.apiservice.postdata(reqbody).subscribe((data)=>{
      console.log(data);
    })
    
  }

}
