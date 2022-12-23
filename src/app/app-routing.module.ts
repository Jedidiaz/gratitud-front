import { CreatoresComponent } from './dashboardCreators/creatores/creatores.component';
import { RegistroComponent } from './Forms/registro/registro.component';
import { FrontCreatorComponent } from './dashboard/front-creator/front-creator.component';
import { TerminosComponent } from './dashboard/terminos/terminos.component';
import { PrivacidadComponent } from './dashboard/privacidad/privacidad.component';
import { ComisionesComponent } from './dashboard/comisiones/comisiones.component';
import { AcercaDeComponent } from './dashboard/acerca-de/acerca-de.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoComponent } from './dashboard/log/lo.component';
import { RecoveryPasswordComponent } from './dashboard/recovery-password/recovery-password.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FormComponent } from './Forms/form/form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoComponent },
  { path: 'reset', component: RecoveryPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'terminos-y-condiciones', component: TerminosComponent },
  { path: 'aviso-privacidad', component: PrivacidadComponent },
  { path: 'comisiones', component: ComisionesComponent },
  { path: 'front-creator', component: FrontCreatorComponent },
  { path: 'form', component: FormComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'creators', component: CreatoresComponent },
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
