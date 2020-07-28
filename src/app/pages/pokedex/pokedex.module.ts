import { NgModule } from '@angular/core';
import { PokedexComponent } from './pokedex.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PokemonCardModule } from '../../components/pokemon-card/pokemon-card.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: PokedexComponent,
}];

@NgModule({
  declarations: [
    PokedexComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PokemonCardModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class PokedexModule {
}
