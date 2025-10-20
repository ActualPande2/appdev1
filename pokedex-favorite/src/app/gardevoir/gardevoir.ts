import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gardevoir',
  standalone: false,
  templateUrl: './gardevoir.html',
  styleUrl: './gardevoir.css'
})
export class Gardevoir {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/gardevoir').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Gardevoir data:', error);
      }
    );
  }


}
