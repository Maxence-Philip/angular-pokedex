import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PokemonTeamModule } from '../../components/pokemon-team/pokemon-team.module';

const routes: Routes = [{
  path: '',
  component: TeamsComponent,
}];

@NgModule({
  declarations: [
    TeamsComponent,
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
export class TeamsModule {
}
