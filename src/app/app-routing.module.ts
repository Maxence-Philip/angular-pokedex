import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
}, {
  path: 'pokedex',
  loadChildren: () => import('./pages/pokedex/pokedex.module').then(m => m.PokedexModule),
}, {
  path: '**',
  loadChildren: () => import('./pages/pokedex/pokedex.module').then(m => m.PokedexModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
