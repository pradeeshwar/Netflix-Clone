import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './modules/login/login.component';
import { LeftComponent } from './modules/login/left/left.component';

import { HomepageComponent } from './modules/homepage/homepage.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
 {
   path:'login', component:LoginComponent
 },
 {
  path:'homepage',component:HomepageComponent
},
{
  path:'contact',component:ContactComponent
},

{
  path: '',
  redirectTo: '/homepage',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/homepage',
  pathMatch: 'full'
}

 
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
