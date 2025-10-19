import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delphox',
  standalone: false,
  templateUrl: './delphox.html',
  styleUrl: './delphox.css'
})
export class Delphox {
  pokemonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/delphox').subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
