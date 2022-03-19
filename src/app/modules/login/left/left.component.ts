import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  pass1="";
  email="";
  no=""
  rightdata =""
   passdata=""
   sendno=""
  passdata2 =""
  pass2=""
  
   send(){
  
  this.rightdata = this.email;
  this.passdata = this.pass1;
  this.sendno = this.no
  }
  constructor() { }

  ngOnInit(): void {
  }

}
