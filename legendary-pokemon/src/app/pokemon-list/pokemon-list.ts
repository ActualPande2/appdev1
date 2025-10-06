import { Component } from '@angular/core';
import { LegendaryPokemon } from '../legendary-pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {
  kantoLegendaries: { name: string; type: string }[] = [];
  johtoLegendaries: { name: string; type: string }[] = [];

  //inject the service into the component
  constructor(private pokemonService: LegendaryPokemon){}

  //on the initialization of the component
  //load the data
  ngOnInit(): void{
  this.kantoLegendaries = this.pokemonService.getKantoLegendaries();
  this.johtoLegendaries = this.pokemonService.getJohtoLegendaries();
  }
}
