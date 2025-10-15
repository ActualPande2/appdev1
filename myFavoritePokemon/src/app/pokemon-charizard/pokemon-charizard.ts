import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-charizard',
  standalone: true,
  templateUrl: './pokemon-charizard.html',
  styleUrl: './pokemon-charizard.css'
})
export class PokemonCharizard {
  pokemon: any;

  constructor(private http: HttpClient){
    this.http.get('https://pokeapi.co/api/v2/pokemon/charizard').subscribe(
      response => {
      this.pokemon = response;
          },
      error => {
      console.error('Error:', error);
      }
    );
  }
}
