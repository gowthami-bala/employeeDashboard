import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileSideCard1Component } from './profile/profile-side-card1/profile-side-card1.component';
import { SampleComponent } from './sample/sample.component';
import { RoughComponent } from './rough/rough.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'profile',component:ProfileComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'ViewProfile',component:ProfileSideCard1Component},
  {path:'sample',component:SampleComponent},
  {path: '' , component:LoginComponent },
  {path:'rough',component:RoughComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
