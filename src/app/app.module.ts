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

@NgModule({
  declarations: [
    AppComponent,
    LoComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
