import { Injectable } from '@angular/core';

export interface Pokeball {
  name: string;
  type: string;
  catchRate: string;
}

@Injectable({ providedIn: 'root' })
export class PokeballsService {
  getPokeballs(): Pokeball[] {
    return [
      { name: 'Lure Ball', type: 'Blue', catchRate: '3× (Fishing Encounters)'},
      { name: 'Level Ball', type: 'Red', catchRate: '1× - 8× (Based on level difference)'},
      { name: 'Love Ball', type: 'Pink', catchRate: '8× (Conditional)'},
      { name: 'Fast Ball', type: 'White', catchRate: '4× (fast Pokémon)'},
      { name: 'Friend Ball', type: 'Green', catchRate: '1× (increases friendship)'}
    ];
  }
}
