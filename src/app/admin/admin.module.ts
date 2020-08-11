import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdModule } from "../md/md.module";
import { MaterialModule } from "../app.module";
import { AdminRoutes } from "./admin.routing";
import { ClientsComponent } from "./clients/clients.component";
import { TechniciansComponent } from "./technicians/technicians.component";
import { StatsComponent } from "./stats/stats.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DemandsComponent } from "./../machine-owner/demands/demands.component";
import { AddComponent } from "./machine-owner/add/add.component";
import { RecordsComponent } from "./../machine-owner/records/records.component";
import { VerificationComponent } from "./machine-owner/verification/verification.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [
    ClientsComponent,
    DemandsComponent,
    AddComponent,
    RecordsComponent,
    VerificationComponent,
    SidebarComponent,
    StatsComponent,
    TechniciansComponent,
  ],
})
export class AdminModule {}
