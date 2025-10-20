import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-totodile',
  standalone: false,
  templateUrl: './totodile.html',
  styleUrl: './totodile.css'
})
export class Totodile {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/totodile').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Totodile data:', error);
      }
    );
  }


}
