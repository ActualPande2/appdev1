import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ampharos',
  standalone: false,
  templateUrl: './ampharos.html',
  styleUrl: './ampharos.css'
})
export class Ampharos {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ampharos').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Ampharos data:', error);
      }
    );
  }


}
