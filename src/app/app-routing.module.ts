import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [
{path: 'users', component: UsersComponent },
{ path: 'admin', component: AdminComponent, data: { title: 'Login Page' } },
{ path: 'contact-us', component: ContactUsComponent, data: { title: 'Contact Page' } },
{ path: 'about-us', component: AboutUsComponent, data: { title: 'Add User Page' } },
{path: 'our-services', component: OurServicesComponent, data: { title: 'Our Service Page' } },
{path :'dashboard',component:DashboardComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'status',component:StatusComponent},
{ path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
