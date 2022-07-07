import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";
// @ts-ignore
import awsconfig from "../aws-exports";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
