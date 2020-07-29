import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDescModalComponent } from '../pokemon-desc-modal/pokemon-desc-modal.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  public openPokemonDialog(): void {
    this.dialog.open(PokemonDescModalComponent, {
      data: {
        pokemon: this.pokemon,
      },
    });
  }
}
