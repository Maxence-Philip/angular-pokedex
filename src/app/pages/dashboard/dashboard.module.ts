import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonTeamModule } from '../../components/pokemon-team/pokemon-team.module';
import { SharedModule } from '../../shared.module';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PokemonTeamModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class DashboardModule {
}
