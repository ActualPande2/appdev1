import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meowscarada',
  standalone: false,
  templateUrl: './meowscarada.html',
  styleUrl: './meowscarada.css'
})
export class Meowscarada {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/meowscarada').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Meowscarada data:', error);
      }
    );
  }
}
