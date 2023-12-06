import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule),
  },
  { path: '**',  redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
