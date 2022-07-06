import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenteePageComponent } from "./mentee-page.component";

const routes: Routes = [
  {
    path: '',
    component: MenteePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenteePageRoutingModule { }
