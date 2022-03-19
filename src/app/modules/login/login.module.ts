import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    LoginComponent,
    
    RightComponent,
    LeftComponent
  ],
  imports: [
    CommonModule,FormsModule,HeaderModule,
    LoginRoutingModule,MatToolbarModule,MatIconModule
  ],
 
  
})
export class LoginModule { }
