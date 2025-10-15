import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCharizard } from './pokemon-charizard/pokemon-charizard';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, PokemonCharizard, HttpClientModule],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myFavoritePokemon');
}
