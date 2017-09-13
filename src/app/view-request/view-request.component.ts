import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  x:boolean;
  y:any;
  b:Array<any>;
  constructor() { }

  ngOnInit() {
    this.x=true;
  // this.b[0]=1;
  // this.b[1]=1;
  // this.b[2]=1;
  // this.b[3]=1;
  // this.b[4]=1;
  // this.b[5]=1;
  //
 }

  m(){
    return this.x;
  }

}
