import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-side-card1',
  templateUrl: './profile-side-card1.component.html',
  styleUrls: ['./profile-side-card1.component.scss']
})
export class ProfileSideCard1Component implements OnInit {
  data: any;
  viewBasicProfile :boolean = true;
  editProfile :boolean = true; 
  tab: any;
  constructor() { }

  ngOnInit(): void {

    this.data = [
      { name: "Personal",icon: "pi pi-user"},
      { name: "Work",icon: "pi pi-briefcase"},
      { name: "Contact",icon: "pi pi-phone"},
      { name: "Skills" ,icon: "pi pi-circle-fill"},
      { name: "Identity",icon: "pi pi-id-card" },
      { name: "Social",icon: "pi pi-globe" },

    ]
  }
  profileNav(data:any){
    this.tab = data;
  }

  profileEdit(data:any){
    if(data === "edit"){
      this.editProfile = false
    }
  }

}
