import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as _ from "lodash"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any = [ {userid : "abc@media.com",password:"abc123","value":"Tom"}, 
                 {userid : "def@media.com",password:"def123","value":"Dick"},
                 {userid : "ghi@media.com",password:"ghi123","value":"Harry"},
                 {userid : "jkl@media.com",password:"jkl123","value":"Lincoln"}
                ];
  constructor() { }

  ngOnInit(): void {
    $('.mention').mentionsInput({
      source: this.users, 
      showAtCaret: true
  });
  }

}
