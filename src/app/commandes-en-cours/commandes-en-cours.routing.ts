import { Routes } from "@angular/router";

import { CommandesEnCoursComponent } from "./commandes-en-cours.component";

export const CommandesEnCoursRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "commandes-en-cours",
        component: CommandesEnCoursComponent,
      },
    ],
  },
];
