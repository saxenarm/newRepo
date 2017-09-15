import { Component, OnInit,Output } from '@angular/core';
import {Request} from '../request';
import {REQUEST} from '../Mock-request';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
//@Output() request:any;

  constructor() { }
request:Array<Request>;
  ngOnInit() {
    this.request=REQUEST;
    console.log(this.request);
  }

}
