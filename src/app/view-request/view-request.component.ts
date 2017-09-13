import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  x:boolean;
  y:any;
  constructor() { }

  ngOnInit() {
    this.x=true;
  
  }

  m(){
    return this.x;
  }

}
