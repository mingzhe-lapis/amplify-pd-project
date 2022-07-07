import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenteePageRoutingModule } from './mentee-page-routing.module';
import { MenteePageComponent } from './mentee-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    MenteePageComponent
  ],
  imports: [
    CommonModule,
    MenteePageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MenteePageModule { }
