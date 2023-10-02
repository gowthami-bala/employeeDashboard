import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import {AvatarModule} from 'primeng/avatar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'primeng/sidebar';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './profile/edit/profile/profile.component';
import { ProfileSideCard1Component } from './profile/profile-side-card1/profile-side-card1.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {ImageModule} from 'primeng/image';
import { SampleComponent } from './sample/sample.component';
import { RoughComponent } from './rough/rough.component';
import {DividerModule} from 'primeng/divider';
import { PersonalComponent } from './profile/personal/personal.component';
import { WorkComponent } from './profile/work/work.component';
import { SocialComponent } from './profile/social/social.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HeaderComponent, ProfileComponent, ProfileSideCard1Component, SidenavComponent, SampleComponent, RoughComponent, PersonalComponent, WorkComponent, SocialComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ButtonModule,
    CardModule,
    MatCardModule,
    InputTextModule,
    MatRadioModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    MenubarModule,
    AvatarModule,
    MatSidenavModule,
    SidebarModule,
    MatMenuModule,
    ImageModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
