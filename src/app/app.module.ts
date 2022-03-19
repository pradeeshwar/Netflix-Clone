import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { HomepageModule } from './modules/homepage/homepage.module';

import { HeaderModule } from './modules/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,LoginModule, MatIconModule,MatSliderModule,LoginModule,HomepageModule,HeaderModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatToolbarModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
