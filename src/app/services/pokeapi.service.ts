import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';
import { TypesEnum } from '../enums/types.enum';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private url = 'https://pokeapi.co/api/v2';

  private static handleTypes(types: any[]): TypesEnum[] {
    return types.map((type) => type.type.name);
  }

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon?limit=151`);
  }

  public getPokemon(pokemonName: string | number): Observable<Pokemon> {
    return this.http.get<any>(`${this.url}/pokemon/${pokemonName}`).pipe(
      mergeMap((resp: any) => {
        return forkJoin([this.http.get<any>(`${this.url}/pokemon-form/${resp.id}`)]).pipe(
          map(([forms]) => {
            const pokemon: Pokemon = {
              name: resp.name,
              id: resp.id,
              types: PokeapiService.handleTypes(resp.types),
              spriteUrl: forms.sprites.front_default,
            };
            return pokemon;
          })
        );
      }),
    );
  }
}
