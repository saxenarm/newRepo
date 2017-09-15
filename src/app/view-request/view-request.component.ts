import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

 
  request:Array<any>;
  constructor() { 

  }

  ngOnInit() {
  this.request=x;
  // this.b[0]=1;

  console.log("erwrw"+this.request);
  // this.b[1]=1;
  // this.b[2]=1;
  // this.b[3]=1;
  // this.b[4]=1;
  // this.b[5]=1;
  //
 }


}
const x=[{id:1,requestby:"ABC",location:"Noida",building:"A",floor:5,seats:40,status:"Rejected"},
{id:1,requestby:"ABC",location:"Noida",building:"A",floor:5,seats:40,status:"Accepted"},
{id:1,requestby:"ABC",location:"Noida",building:"A",floor:5,seats:40,status:"Accepted"},
{id:1,requestby:"ABC",location:"Noida",building:"A",floor:5,seats:40,status:"Accepted"},
{id:1,requestby:"ABC",location:"Noida",building:"A",floor:5,seats:40,status:"Rejected"}

]
