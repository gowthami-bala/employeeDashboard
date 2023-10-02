import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile! :FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.profile = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname:['',[Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    });

  }

}
