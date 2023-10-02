import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @Output() editPersonal = new EventEmitter();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onEdit() {
    console.log("hello");
    this.editPersonal.emit("edit");
  }
}
