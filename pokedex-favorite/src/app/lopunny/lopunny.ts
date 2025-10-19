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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/lopunny').subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
