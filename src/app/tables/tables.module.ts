import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../app.module";

import { TablesRoutes } from "./tables.routing";

import { ExtendedTableComponent } from "./extendedtable/extendedtable.component";
import { RegularTableComponent } from "./regulartable/regulartable.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    MaterialModule,
  ],
  declarations: [ExtendedTableComponent, RegularTableComponent],
})
export class TablesModule {}
