import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-placeholder',
  templateUrl: './pokemon-placeholder.component.html',
  styleUrls: ['./pokemon-placeholder.component.scss']
})
export class PokemonPlaceholderComponent {
  @Input() imageUrl: string;
}
