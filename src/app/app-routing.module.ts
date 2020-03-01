//created routers for navigating to different components 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';



const appRoutes:Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'}, ///loads home component first
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'user', component:UserComponent},
  {path:'log-in', component:LogInComponent},
  {path:'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule] 
})

export class AppRoutingModule{ }
