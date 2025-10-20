import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cyndaquil',
  standalone: false,
  templateUrl: './cyndaquil.html',
  styleUrl: './cyndaquil.css'
})
export class Cyndaquil {
  pokemonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/cyndaquil').subscribe(
      response => {
        this.pokemonData = response;
      },
      error => {
        console.error('Error fetching Cyndaquil data:', error);
      }
    );
  }


}
