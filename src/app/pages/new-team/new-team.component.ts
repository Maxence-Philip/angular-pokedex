import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {
  public title = 'New team';
  public search = '';
  public pokeList: Pokemon[];

  constructor(
    private readonly location: Location,
  ) { }

  ngOnInit(): void {
    this.pokeList = JSON.parse(localStorage.getItem('pokeList'));
    this.pokeList.sort((a, b) => a.id - b.id);
  }

  public goBack(): void {
    this.location.back();
  }

  public onClearSearch(): void {
    this.search = '';
  }
}
