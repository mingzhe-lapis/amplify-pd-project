import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AmplifyAuthenticatorModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AuthModule { }
