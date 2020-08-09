import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
}, {
  path: 'pokedex',
  loadChildren: () => import('./pages/pokedex/pokedex.module').then(m => m.PokedexModule),
}, {
  path: 'teams',
  loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule),
}, {
  path: 'teams/new',
  loadChildren: () => import('./pages/new-team/new-team.module').then(m => m.NewTeamModule),
}, {
  path: '**',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
