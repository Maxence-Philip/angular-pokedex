import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { IdPipe } from '../../pipes/id.pipe';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    PokemonCardComponent,
    IdPipe,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PokemonCardComponent
  ]
})
export class PokemonCardModule {
}
