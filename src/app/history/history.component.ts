import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
request:Array<any>;
  ngOnInit() {
    this.request=x;
  }

}
const x=[{id:1,requestId:11,projectId:3,building:"A",floor:1,seats:10,status:0},
{id:2,requestId:22,projectId:111,building:"A",floor:2,seats:20,status:"Approved"},
{id:3,requestId:33,projectId:222,building:"A",floor:3,seats:30,status:"Approved"},
{id:4,requestId:44,projectId:333,building:"A",floor:4,seats:40,status:"Rejected"},
{id:5,requestId:55,projectId:444,buliding:"A",floor:5,seats:50,status:"Approved"},
{id:6,requestId:66,projectId:5555,building:"A",floor:6,seats:60,status:"Rejected"},
{id:7,requestId:77,projectId:666,building:"A",floor:8,seats:70,status:"Approved"}
]