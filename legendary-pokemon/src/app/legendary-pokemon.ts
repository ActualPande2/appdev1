import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//The service is available through out the application
})
export class LegendaryPokemon {
  constructor() {
}

  getKantoLegendaries(){
    return [
      { name: 'Articuno', type: 'Ice/Flying' },
      { name: 'Zapdos', type: 'Electric/Flying' },
      { name: 'Moltres', type: 'Fire/Flying' },
      { name: 'Mewtwo', type: 'Psychic' },
      { name: 'Mew', type: 'Psychic' }
    ];
  }
  
  getJohtoLegendaries() {
    return [
      { name: 'Raikou', type: 'Electric' },
      { name: 'Entei', type: 'Fire' },
      { name: 'Suicune', type: 'Water' },
      { name: 'Lugia', type: 'Psychic/Flying' },
      { name: 'Ho-Oh', type: 'Fire/Flying' },
      { name: 'Celebi', type: 'Psychic/Grass' }
    ];
  }
}