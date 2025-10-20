import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-umbreon',
  standalone: false,
  templateUrl: './umbreon.html',
  styleUrl: './umbreon.css'
})
export class Umbreon {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/umbreon').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Umbreon data:', error);
      }
    );
  }


}
