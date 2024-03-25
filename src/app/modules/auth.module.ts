import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegistrationComponent
}];


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class AuthModule { }
