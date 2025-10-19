import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-victini',
  standalone: false,
  templateUrl: './victini.html',
  styleUrl: './victini.css'
})
export class Victini {
  pokemonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/victini').subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
