import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { TypesPipe } from '../../pipes/types.pipe';
import { PokemonTeamModule } from '../../components/pokemon-team/pokemon-team.module';
import { SharedModule } from '../../shared.module';

const routes: Route[] = [{
  path: '',
  component: DashboardComponent,
}];

@NgModule({
  declarations: [
    DashboardComponent,
    TypesPipe,
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
