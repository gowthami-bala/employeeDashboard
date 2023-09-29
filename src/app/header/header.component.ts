import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  loginUser: any;
  searchIcon: boolean = true;
  constructor(private apiservice: ApiserviceService, public router: Router) {
    // this.apiservice.currentLogin.subscribe((user) => {
    //   console.log(user);
      this.loginUser = localStorage.getItem("user")
      this.loginUser = this.loginUser.charAt(0).toUpperCase()
    // })
  }

  ngOnInit(): void {

  }
  search() {
    this.searchIcon = !this.searchIcon
  }

  logout() {
    this.router.navigateByUrl('login')
    localStorage.clear()
  }

  viewProfile() {
    this.valueChange.emit("view");
  }


  updateNav() {
    this.valueChange.emit(true);
  }
}
