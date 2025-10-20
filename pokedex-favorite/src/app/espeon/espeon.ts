import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-espeon',
  standalone: false,
  templateUrl: './espeon.html',
  styleUrl: './espeon.css'
})
export class Espeon {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/espeon').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Espeon data:', error);
      }
    );
  }
}
