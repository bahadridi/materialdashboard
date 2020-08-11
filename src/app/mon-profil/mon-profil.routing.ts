import { Routes } from "@angular/router";

import { MonProfilComponent } from "./mon-profil.component";

export const MonProfilRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "MonProfil",
        component: MonProfilComponent,
      },
    ],
  },
];
