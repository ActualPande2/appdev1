import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ditto',
  standalone: false,
  templateUrl: './ditto.html',
  styleUrl: './ditto.css'
})
export class Ditto {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Ditto data:', error);
      }
    );
  }


}
