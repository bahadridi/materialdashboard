import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdModule } from "../md/md.module";
import { MaterialModule } from "../app.module";
import { CommandesEnCoursComponent } from "./commandes-en-cours.component";
import { CommandesEnCoursRoutes } from "./commandes-en-cours.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CommandesEnCoursRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [CommandesEnCoursComponent],
})
export class CommandesEnCoursModule {}
