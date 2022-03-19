import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { HomepageModule } from '../homepage/homepage.module';
import { LoginComponent } from './login.component';
const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
