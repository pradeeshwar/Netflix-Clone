import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LoginModule } from '../login/login.module';
import { LoginComponent } from '../login/login.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,LoginModule,HeaderModule,
    HomepageRoutingModule
  ],
  
})
export class HomepageModule { }
