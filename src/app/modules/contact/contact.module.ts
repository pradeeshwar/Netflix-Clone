import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CleftComponent } from './cleft/cleft.component';
import { CrightComponent } from './cright/cright.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    CleftComponent,
    CrightComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ContactRoutingModule
  ],
  exports: [
        
    ContactComponent,]
})
export class ContactModule { }
