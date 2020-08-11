import { Routes } from "@angular/router";

import { DevisRecusComponent } from "./devis-recus.component";

export const DevisRecusRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "devis-recus",
        component: DevisRecusComponent,
      },
    ],
  },
];
