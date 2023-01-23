import { spinnerInterceptor } from './shared/interceptor/spinner.interceptor';
//Angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { LoComponent } from './dashboard/log/lo.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { RecoveryPasswordComponent } from './dashboard/recovery-password/recovery-password.component';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './dashboard/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AcercaDeComponent } from './dashboard/acerca-de/acerca-de.component';
import { PrivacidadComponent } from './dashboard/privacidad/privacidad.component';
import { TerminosComponent } from './dashboard/terminos/terminos.component';
import { ComisionesComponent } from './dashboard/comisiones/comisiones.component';
import { FrontCreatorComponent } from './dashboard/front-creator/front-creator.component';
import { FormComponent } from './Forms/form/form.component';
import { RegistroComponent } from './Forms/registro/registro.component';
import { BarComponent } from './shared/bar/bar.component';
import { CreatoresComponent } from './dashboardCreators/creatores/creatores.component';
import { EditBioComponent } from './dashboardCreators/edit-bio/edit-bio.component';
import { ProComponent } from './shared/pro/pro.component';
import { MenssagesComponent } from './dashboardCreators/menssages/menssages.component';
import { MessageComponent } from './dashboardCreators/message/message.component';
import { RegalosComponent } from './dashboardCreators/regalos/regalos.component';
import { AjustesComponent } from './dashboardCreators/ajustes/ajustes.component';
import { MainAdminComponent } from './dashboardAdmin/main-admin/main-admin.component';
import { InicioComponent } from './dashboardAdmin/inicio/inicio.component';
import { CreadoresComponent } from './dashboardAdmin/creadores/creadores.component';
import { UsuariosComponent } from './dashboardAdmin/usuarios/usuarios.component';
import { ProsComponent } from './dashboardAdmin/pros/pros.component';
import { HistorialRetirosComponent } from './dashboardAdmin/historial-retiros/historial-retiros.component';
import { AjustesAdminComponent } from './dashboardAdmin/ajustes-admin/ajustes-admin.component';
import { AuthEmailComponent } from './auth/auth-email/auth-email.component';
import { PayMethodComponent } from './pay/pay-method/pay-method.component';
import { ClipboardModule } from 'ngx-clipboard';
import { LoadGiftComponent } from './dashboardCreators/load-gift/load-gift.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { BoletinComponent } from './dashboardAdmin/boletin/boletin.component';
import { SettingsComponent } from './dashboardAdmin/settings/settings.component';
import { ListGiftComponent } from './Forms/list-gift/list-gift.component';
import { SuscriptionComponent } from './pay/suscription/suscription.component';
import { ConvertProComponent } from './pay/convert-pro/convert-pro.component';
import { TestComponent } from './modules/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    AcercaDeComponent,
    PrivacidadComponent,
    TerminosComponent,
    ComisionesComponent,
    FrontCreatorComponent,
    FormComponent,
    RegistroComponent,
    BarComponent,
    CreatoresComponent,
    EditBioComponent,
    ProComponent,
    MenssagesComponent,
    MessageComponent,
    RegalosComponent,
    AjustesComponent,
    MainAdminComponent,
    InicioComponent,
    CreadoresComponent,
    UsuariosComponent,
    ProsComponent,
    HistorialRetirosComponent,
    AjustesAdminComponent,
    AuthEmailComponent,
    PayMethodComponent,
    LoadGiftComponent,
    FilterPipe,
    BoletinComponent,
    SettingsComponent,
    ListGiftComponent,
    SuscriptionComponent,
    ConvertProComponent,
    TestComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
