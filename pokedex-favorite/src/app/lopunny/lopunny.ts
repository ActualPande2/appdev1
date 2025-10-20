import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lopunny',
  standalone: false,
  templateUrl: './lopunny.html',
  styleUrl: './lopunny.css'
})
export class Lopunny {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/lopunny').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Lopunny data:', error);
      }
    );
  }


}
