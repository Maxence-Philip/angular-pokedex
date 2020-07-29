import { NgModule } from '@angular/core';
import { PokemonTeamComponent } from './pokemon-team.component';
import { PokemonPlaceholderModule } from '../pokemon-placeholder/pokemon-placeholder.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [PokemonTeamComponent],
  imports: [
    PokemonPlaceholderModule,
    SharedModule,
  ],
  exports: [
    PokemonTeamComponent
  ]
})
export class PokemonTeamModule {}
