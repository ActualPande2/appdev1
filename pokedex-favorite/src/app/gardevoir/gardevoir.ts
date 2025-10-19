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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/gardevoir').subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
