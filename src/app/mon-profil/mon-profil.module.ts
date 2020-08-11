import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MonProfilRoutes } from "./mon-profil.routing";

import { MonProfilComponent } from "./mon-profil.component";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MonProfilRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  declarations: [MonProfilComponent],
})
export class MonProfilModule {}
