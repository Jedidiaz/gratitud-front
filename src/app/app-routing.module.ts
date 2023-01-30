import { CancelarComponent } from './dashboardCreators/cancelar/cancelar.component';
import { ForgotPasswordComponent } from './Forms/forgot-password/forgot-password.component';
import { TestComponent } from './modules/test/test.component';
import { ConvertProComponent } from './pay/convert-pro/convert-pro.component';
import { SuscriptionComponent } from './pay/suscription/suscription.component';
import { ListGiftComponent } from './Forms/list-gift/list-gift.component';
import { LoadGiftComponent } from './dashboardCreators/load-gift/load-gift.component';
import { PayMethodComponent } from './pay/pay-method/pay-method.component';
import { AuthEmailComponent } from './auth/auth-email/auth-email.component';
import { MainAdminComponent } from './dashboardAdmin/main-admin/main-admin.component';
import { AjustesComponent } from './dashboardCreators/ajustes/ajustes.component';
import { RegalosComponent } from './dashboardCreators/regalos/regalos.component';
import { MessageComponent } from './dashboardCreators/message/message.component';
import { MenssagesComponent } from './dashboardCreators/menssages/menssages.component';
import { EditBioComponent } from './dashboardCreators/edit-bio/edit-bio.component';
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
  { path: 'recuperar-contraseña', component: RecoveryPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'terminos-y-condiciones', component: TerminosComponent },
  { path: 'aviso-privacidad', component: PrivacidadComponent },
  { path: 'comisiones', component: ComisionesComponent },
  { path: 'registro/:username', component: RegistroComponent },
  { path: 'perfil', component: CreatoresComponent },
  { path: 'perfil/cargar-regalos', component: LoadGiftComponent },
  { path: 'perfil/editar', component: EditBioComponent },
  { path: 'perfil/messages', component: MenssagesComponent },
  { path: 'perfil/messages/:id', component: MessageComponent },
  { path: 'perfil/regalos-recibidos', component: RegalosComponent },
  { path: 'perfil/ajustes', component: AjustesComponent },
  { path: 'perfil/pro', component: ConvertProComponent },
  { path: 'admin', component: MainAdminComponent },
  { path: 'valid', component: AuthEmailComponent },
  { path: 'donacion', component: PayMethodComponent },
  { path: 'lista-regalos', component: ListGiftComponent },
  { path: 'suscripcion', component: SuscriptionComponent },
  { path: 'test', component: TestComponent },
  { path: 'reset', component: ForgotPasswordComponent },
  { path: 'cancelar', component: CancelarComponent },
  { path: ':username', component: FrontCreatorComponent },
  { path: ':username/mensaje', component: FormComponent },

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
