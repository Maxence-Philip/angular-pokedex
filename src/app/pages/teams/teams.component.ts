import { Component, OnInit } from '@angular/core';
import { PokemonTeam } from '../../interfaces/pokemon-team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public title = 'Teams';
  public pokeTeams: PokemonTeam[] = [];

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.pokeTeams = JSON.parse(localStorage.getItem('pokeTeams'));
  }

  public addTeam(): void {
    this.router.navigateByUrl('/teams/new');
  }
}
