import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './services/pokeapi.service';
import { Pokemon } from './interfaces/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isMenuOpen = true;

  constructor(
    private readonly pokeapiService: PokeapiService,
  ) {
  }

  ngOnInit() {
    if (!localStorage.getItem('pokeList')) {
      this.initData();
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Add real database, here it's only localStorage for the moment
  private initData(): void {
    localStorage.setItem('pokeList', JSON.stringify([]));

    this.pokeapiService.getPokemons().subscribe((resp) => {
      const pokemons = resp.results;

      pokemons.forEach((pokemon) => {
        this.pokeapiService.getPokemon(pokemon.name).subscribe((poke: Pokemon) => {
          const pokeList = JSON.parse(localStorage.getItem('pokeList'));
          pokeList.push(poke);
          localStorage.setItem('pokeList', JSON.stringify(pokeList));
        });
      });
    });
  }
}
