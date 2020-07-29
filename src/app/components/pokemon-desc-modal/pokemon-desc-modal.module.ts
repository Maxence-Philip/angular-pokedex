import { NgModule } from '@angular/core';
import { PokemonDescModalComponent } from './pokemon-desc-modal.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PokemonDescModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  entryComponents: [
    PokemonDescModalComponent,
  ],
  exports: [
    PokemonDescModalComponent,
  ],
})
export class PokemonDescModalModule {
}
