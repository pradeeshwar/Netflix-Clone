import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleft',
  templateUrl: './cleft.component.html',
  styleUrls: ['./cleft.component.css']
})
export class CleftComponent  {


  parentname = "";

 sendingdata = ""


pemail ="";
semail ="";

pno ="";
sno="";

ptext ="";
stext="";



  transferdata(){
this.sendingdata = this.parentname;
this.semail = this.pemail;
this.sno = this.pno;
this.stext = this.ptext;
  }

}
