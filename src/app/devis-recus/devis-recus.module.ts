import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdModule } from "../md/md.module";
import { MaterialModule } from "../app.module";
import { DevisRecusComponent } from "./devis-recus.component";
import { DevisRecusRoutes } from "./devis-recus.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DevisRecusRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [DevisRecusComponent],
})
export class DevisRecusModule {}
