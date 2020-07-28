import { NgModule } from '@angular/core';
import { PokemonTeamComponent } from './pokemon-team.component';
import { PokemonPlaceholderModule } from '../pokemon-placeholder/pokemon-placeholder.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PokemonTeamComponent],
  imports: [
    PokemonPlaceholderModule,
    CommonModule,
    MatIconModule,
  ],
  exports: [
    PokemonTeamComponent
  ]
})
export class PokemonTeamModule {}
