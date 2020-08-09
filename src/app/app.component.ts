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
  public displaySpinner = false;
  private storageEvent = new Event('storageEvent');

  constructor(
    private readonly pokeApiService: PokeapiService,
  ) {}

  private static initPokeTeams(): void {
    const pokeTeams = JSON.stringify([]);
    localStorage.setItem('pokeTeams', pokeTeams);
  }

  ngOnInit() {
    // localStorage.clear();
    const pokeList = localStorage.getItem('pokeList');
    if (!pokeList?.length) {
      this.getPokemons();
    }

    const pokeTeams = localStorage.getItem('pokeTeams');
    if (!pokeTeams?.length) {
      AppComponent.initPokeTeams();
    }
  }

  private getPokemons(): void {
    this.displaySpinner = true;
    localStorage.setItem('pokeList', JSON.stringify([]));

    this.pokeApiService.getPokemons().subscribe(((resp) => {
      const pokemons = resp.results;
      let i = 0;

      pokemons.forEach((pokemon) => {
        this.pokeApiService.getPokemon(pokemon.name).subscribe((poke: Pokemon) => {
          const pokeList = JSON.parse(localStorage.getItem('pokeList'));
          pokeList.push(poke);
          localStorage.setItem('pokeList', JSON.stringify(pokeList));

          i++;
          localStorage.setItem('total', i.toString());
          window.dispatchEvent(this.storageEvent);

          if (i === 150) {
            this.displaySpinner = false;
          }
        });
      });
    }));
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
