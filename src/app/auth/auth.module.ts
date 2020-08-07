import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { reducers } from "./store/reducers";
import { AuthService } from "./services/auth.service";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { PersistenceService } from "../shared/services/persistence.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { LoginEffect } from "./store/effects/login.effect";
import { GetCurrentUserEffect } from "./store/effects/getCurrentUser.effect";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect
    ]),
    BackendErrorMessagesModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})
export class AuthModule {}
