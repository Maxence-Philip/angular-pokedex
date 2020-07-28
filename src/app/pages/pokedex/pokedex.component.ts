import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit, AfterViewInit {
  public title = 'Pokedex';
  public filteredPokeList: Pokemon[] = [];
  public search: string;

  private pokeList: Pokemon[] = [];
  private inputSub: Subscription;

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.pokeList = JSON.parse(localStorage.getItem('pokeList'));
    this.pokeList.sort((a, b) => a.id - b.id);
    this.filteredPokeList = this.pokeList;
  }

  ngAfterViewInit() {
    this.inputSub = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(() => {
      const searchValueRegex = new RegExp(this.searchInput.nativeElement.value);
      this.filteredPokeList = this.pokeList.filter(pokemon => searchValueRegex.test(pokemon.name));
    });
  }

  public onClearSearch(): void {
    this.search = '';
    this.filteredPokeList = this.pokeList;
  }
}
