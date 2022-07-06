import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorPageRoutingModule } from './mentor-page-routing.module';
import { MentorPageComponent } from './mentor-page.component';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    MentorPageComponent
  ],
  imports: [
    CommonModule,
    MentorPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MentorPageModule {
}
