import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDialogData } from '../../interfaces/pokemon-dialog-data';

@Component({
  selector: 'app-pokemon-desc-modal',
  templateUrl: './pokemon-desc-modal.component.html',
  styleUrls: ['./pokemon-desc-modal.component.scss']
})
export class PokemonDescModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PokemonDialogData) {
    const pokeName = data.pokemon.name;
    data.pokemon.name = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  }

  ngOnInit() {
  }
}
