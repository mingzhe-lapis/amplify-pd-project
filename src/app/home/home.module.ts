import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from "./home.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { AuthModule } from "../auth/auth.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    AuthModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class HomeModule { }
