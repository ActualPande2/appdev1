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
      { name: 'Poké Ball', type: 'Standard', catchRate: '1×'},
      { name: 'Great Ball', type: 'Enhanced', catchRate: '1.5×'},
      { name: 'Ultra Ball', type: 'High-performance', catchRate: '2×'},
      { name: 'Fast Ball', type: 'Special', catchRate: '4× (fast Pokémon)'},
      { name: 'Friend Ball', type: 'Special', catchRate: '1× (increases friendship)'}
    ];
  }
}
