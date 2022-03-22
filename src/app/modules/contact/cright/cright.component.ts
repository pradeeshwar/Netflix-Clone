import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cright',
  templateUrl: './cright.component.html',
  styleUrls: ['./cright.component.css']
})
export class CrightComponent  {


  @Input()
  sendingdata!: string;
  @Input()
  sno!: string;

  @Input()
  stext!: string;

  @Input()
  semail!: string;

 


 

}
