import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { TagInputModule } from "ngx-chips";
import { SelectModule } from "ng2-select";
import { MaterialModule } from "../app.module";
import { FormsRoutes } from "./forms.routing";

import { ValidationFormsComponent } from "./validationforms/validationforms.component";
import { WizardComponent } from "./wizard/wizard.component";
import { FieldErrorDisplayComponent } from "./validationforms/field-error-display/field-error-display.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
  ],
  declarations: [
    ValidationFormsComponent,
    WizardComponent,
    FieldErrorDisplayComponent,
  ],
})
export class Forms {}
