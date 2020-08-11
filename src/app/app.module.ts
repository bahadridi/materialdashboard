import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppComponent } from "./app.component";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedpluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";

import { SweetAlertService } from "./services/sweet-alert.service";

import { AppRoutes } from "./app.routing";
import { LoginComponent } from "./authentification/login/login.component";
import { RegisterComponent } from "./authentification/register/register.component";
import { ForgotPasswordComponent } from "./authentification/forgot-password/forgot-password.component";
import { BecomeAPartnerComponent } from "./authentification/become-a-partner/become-a-partner.component";

import { DemandsComponent } from "./machine-owner/demands/demands.component";
import { BiddingComponent } from "./machine-owner/bidding/bidding.component";
import { ExploreComponent } from "./machine-owner/explore/explore.component";
import { RepairComponent } from "./machine-owner/repair/repair.component";
import { RecordsComponent } from "./machine-owner/records/records.component";
import { PendingComponent } from "./admin/demands/pending/pending.component";
import { AddComponent } from "./admin/machine-owner/add/add.component";
import { VerificationComponent } from "./admin/machine-owner/verification/verification.component";
import { ClientsComponent } from "./admin/clients/clients.component";
import { TechniciansComponent } from "./admin/technicians/technicians.component";
import { BreakdownsComponent } from "./technician/breakdowns/breakdowns.component";
import { ProfileComponent } from './client/profile/profile.component';
import { StatsComponent } from './client/stats/stats.component';
import { DemandsPendingComponent } from './client/demands-pending/demands-pending.component';
import { DemandsRecordsComponent } from './client/demands-records/demands-records.component';
import { QuotesComponent } from './client/quotes/quotes.component';
import { SidebarComponent } from './client/sidebar/sidebar.component';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    BecomeAPartnerComponent,
    DemandsComponent,
    BiddingComponent,
    ExploreComponent,
    RepairComponent,
    RecordsComponent,
    PendingComponent,
    AddComponent,
    VerificationComponent,
    ClientsComponent,
    TechniciansComponent,
    BreakdownsComponent,
    ProfileComponent,
    StatsComponent,
    DemandsPendingComponent,
    DemandsRecordsComponent,
    QuotesComponent,
    SidebarComponent,
  ],
})
export class MaterialModule {}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    HttpClientModule,

    MaterialModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [MatNativeDateModule, SweetAlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
