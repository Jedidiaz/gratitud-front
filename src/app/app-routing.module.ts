import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoComponent } from './dashboard/log/lo.component';
import { RecoveryPasswordComponent } from './dashboard/recovery-password/recovery-password.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { HomeComponent } from './dashboard/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoComponent },
  { path: 'reset', component: RecoveryPasswordComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
