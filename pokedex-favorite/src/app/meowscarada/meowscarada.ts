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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/meowscarada').subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
