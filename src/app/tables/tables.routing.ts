import { Routes } from "@angular/router";

import { ExtendedTableComponent } from "./extendedtable/extendedtable.component";
import { RegularTableComponent } from "./regulartable/regulartable.component";

export const TablesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "regular",
        component: RegularTableComponent,
      },
    ],
  },
];
