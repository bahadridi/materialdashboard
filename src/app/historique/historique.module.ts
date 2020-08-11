import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdModule } from "../md/md.module";
import { MaterialModule } from "../app.module";
import { HistoriqueComponent } from "./historique.component";
import { HistoriqueRoutes } from "./historique.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HistoriqueRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [HistoriqueComponent],
})
export class HistoriqueModule {}
