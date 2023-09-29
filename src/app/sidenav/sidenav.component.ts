import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  shouldRun: boolean = false;
  getlocal: any
  viewDetails: boolean = true;
  constructor() {
   }

  ngOnInit(): void {
    
  }

  showHide(data: any) {
    // console.log(data);
    
    if (data === true) {
      this.shouldRun = !this.shouldRun
      console.log(this.shouldRun);
      
    }
    if(data === "view"){
      this.viewDetails = false
    }
  }
}
