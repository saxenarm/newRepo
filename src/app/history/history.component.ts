import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
//@Output x:any{};
  constructor() { }
request:Array<any>;
  ngOnInit() {
    this.request=x;
  }

}
const x=[{id:1,requestId:11,projectId:3,building:"A",floor:5,seats:40,status:0},
{id:2,requestId:22,projectId:111,building:"B",floor:2,seats:40,status:"Approved"},
{id:3,requestId:33,projectId:222,building:"C",floor:3,seats:40,status:"Approved"},
{id:4,requestId:44,projectId:333,building:"D",floor:4,seats:40,status:"Rejected"},
{id:5,requestId:55,projectId:444,building:"E",floor:5,seats:40,status:"Approved"},
{id:6,requestId:66,projectId:5555,building:"F",floor:6,seats:40,status:"Rejected"},
{id:7,requestId:77,projectId:666,building:"G",floor:8,seats:40,status:"Approved"}
]