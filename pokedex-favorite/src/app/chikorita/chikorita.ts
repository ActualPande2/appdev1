import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chikorita',
  standalone: false,
  templateUrl: './chikorita.html',
  styleUrl: './chikorita.css'
})
export class Chikorita {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/chikorita').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Chikorita data:', error);
      }
    );
  }


}
