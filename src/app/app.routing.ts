import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
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
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },
];

const config: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
