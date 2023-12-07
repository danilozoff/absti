import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule),
  },
  { path: '**',  redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
