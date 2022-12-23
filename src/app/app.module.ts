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
    CreatoresComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
