import { Routes } from "@angular/router";

import { ValidationFormsComponent } from "./validationforms/validationforms.component";
import { WizardComponent } from "./wizard/wizard.component";

export const FormsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "validation",
        component: ValidationFormsComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "wizard",
        component: WizardComponent,
      },
    ],
  },
];
