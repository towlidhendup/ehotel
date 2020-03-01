//for navigating among components inside admin

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PortalComponent } from './portal/portal.component';

const adminRoutes:Routes=[
    {path:'',redirectTo:'/admin',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'portal',component:PortalComponent},
    {path:'profile',component:ProfileComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes)
  ]
})
export class AdminRoutingModule { }
