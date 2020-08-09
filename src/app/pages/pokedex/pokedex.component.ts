import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit, AfterViewInit, OnDestroy {
  public title = 'Pokedex';
  public filteredPokeList: Pokemon[] = [];
  public search: string;

  private pokeList: Pokemon[] = [];
  private inputSub: Subscription;

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

  ngOnInit(): void {
    this.updatePokeList();
    window.addEventListener('storageEvent', this.updatePokeList.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('storageEvent', this.updatePokeList.bind(this));
  }

  ngAfterViewInit() {
    this.inputSub = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(() => {
      const searchValueRegex = new RegExp(this.searchInput.nativeElement.value, 'i');
      this.filteredPokeList = this.pokeList.filter(pokemon => searchValueRegex.test(pokemon.name));
    });
  }

  private updatePokeList(): void {
    this.pokeList = JSON.parse(localStorage.getItem('pokeList'));
    this.pokeList.sort((a, b) => a.id - b.id);
    this.filteredPokeList = this.pokeList;
  }

  public onClearSearch(): void {
    this.search = '';
    this.filteredPokeList = this.pokeList;
  }
}
