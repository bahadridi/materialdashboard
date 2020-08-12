import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients/clients.component';
export const AdminRoutes: Routes = [

    {
        path: 'sidebar',
        component: SidebarComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
        pathMatch:'full'
      },
];

@NgModule({
    imports: [RouterModule.forChild(AdminRoutes)],
    exports: [RouterModule]
  })
  export class ClientsRoutingModule { }
  