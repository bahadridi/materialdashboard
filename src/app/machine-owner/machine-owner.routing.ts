import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandsComponent } from './demands/demands.component';


const routes: Routes = [
   {
       path: 'demands',
       component: DemandsComponent,
       pathMatch: 'full'
   }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MachineOwnerRoutingModule { }