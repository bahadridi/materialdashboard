import { Routes , ExtraOptions , RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
      },
      {
        path: "",
        loadChildren: "./mon-profil/mon-profil.module#MonProfilModule",
      },
      {
        path: "",
        loadChildren: "./historique/historique.module#HistoriqueModule",
      },
      {
        path: "",
        loadChildren:
          "./commandes-en-cours/commandes-en-cours.module#CommandesEnCoursModule",
      },
      {
        path: "",
        loadChildren: "./devis-recus/devis-recus.module#DevisRecusModule",
      },

      {
        path: "forms",
        loadChildren: "./forms/forms.module#Forms",
      },
      {
        path: 'machine-owner',
        loadChildren: () => import('./machine-owner/machine-owner.module')
          .then(m => m.MachineOwnerModule),
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        loadChildren: "./pages/pages.module#PagesModule",
      },
    ],
  },
];
