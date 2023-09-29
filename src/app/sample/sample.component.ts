import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  data: any;
  viewBasicProfile :boolean = false;
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

}
