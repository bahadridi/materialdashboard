import { Routes } from "@angular/router";

import { HistoriqueComponent } from "./historique.component";

export const HistoriqueRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "historique",
        component: HistoriqueComponent,
      },
    ],
  },
];
