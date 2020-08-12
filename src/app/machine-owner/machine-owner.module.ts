import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BiddingComponent } from "./bidding/bidding.component";
import { ExploreComponent } from "./explore/explore.component";
import { DemandsComponent } from "./demands/demands.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecordsComponent } from "./records/records.component";
import { RepairComponent } from "./repair/repair.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { StatsComponent } from "./stats/stats.component";

@NgModule({
    declarations: [
    BiddingComponent,
    ExploreComponent,
    DemandsComponent,
    ProfileComponent,
    RecordsComponent,
    RepairComponent,
    SidebarComponent,
    StatsComponent
    ],
  })
  
  @NgModule({
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
    ],

  })
  export class MachineOwnerModule {
}