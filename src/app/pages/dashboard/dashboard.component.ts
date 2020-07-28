import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public title = 'Home';
  public team: Pokemon[] = [];

  constructor(
    private readonly pokeapiService: PokeapiService,
  ) { }

  ngOnInit(): void {
    const pokeList = JSON.parse(localStorage.getItem('pokeList'));
    [45, 22, 78, 56, 88, 149].forEach((i) => {
      this.team.push(pokeList[i]);
    });
  }

}
