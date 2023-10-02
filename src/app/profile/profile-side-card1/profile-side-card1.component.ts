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
  constructor() { }

  ngOnInit(): void {

    this.data = [
      { id: "1", image: "../../assets/connection.jpg" },
      { id: "2", image: "../../assets/connection.jpg" },
      { id: "3", image: "../../assets/connection.jpg" },
      { id: "4", image: "../../assets/connection.jpg" },
      { id: "5", image: "../../assets/connection.jpg" },
      { id: "6", image: "../../assets/connection.jpg" },
      { id: "7", image: "../../assets/connection.jpg" },
      { id: "8", image: "../../assets/connection.jpg" },
      { id: "9", image: "../../assets/connection.jpg" },
      { id: "10", image: "../../assets/connection.jpg" },
      { id: "11", image: "../../assets/connection.jpg" },
      { id: "12", image: "../../assets/connection.jpg" },
      { id: "13", image: "../../assets/connection.jpg" },
      { id: "14", image: "../../assets/connection.jpg" },
      { id: "15", image: "../../assets/connection.jpg" },
    ]
  }
  profileNav(){
    this.viewBasicProfile = false
    
  }

  profileEdit(data:any){
    console.log("hi");
    
    console.log(data);
    if(data === "edit"){
      this.editProfile = false
    }
  }

}
