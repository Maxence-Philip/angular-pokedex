import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { SharedModule } from '../../shared.module';
import { PokemonDescModalModule } from '../pokemon-desc-modal/pokemon-desc-modal.module';

@NgModule({
  declarations: [
    PokemonCardComponent,
  ],
  imports: [
    SharedModule,
    PokemonDescModalModule,
  ],
  exports: [
    PokemonCardComponent
  ]
})
export class PokemonCardModule {
}
