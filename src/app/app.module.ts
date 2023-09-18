import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {InputTextModule} from 'primeng/inputtext';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ButtonModule,
    CardModule,
    MatCardModule,
    InputTextModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
