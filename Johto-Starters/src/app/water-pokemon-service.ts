import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterPokemonService {
  getTotodile() {
    return {
      name: 'Totodile',
      image: './Water/totodile.jpg',
      health: 50,
      attack: 65,
      defense: 64,
      Specialattack: 44,
      Specialdefense: 48,
      speed: 43,
      total: 314,
      type: 'Water',
      Moves: [
        'Scratch (Lv 1)',
        'Leer (Lv 1)',
        'Rage (Lv 7)',
        'Water Gun (Lv 13)'
      ],
    };
  }

  getCroconaw() {
    return {
      name: 'Croconaw',
      image: './Water/croconaw.jpg',
      health: 65,
      attack: 80,
      defense: 80,
      Specialattack: 59,
      Specialdefense: 63,
      speed: 58,
      total: 405,
      type: 'Water',
      Moves: [
        'Scratch (Lv 1)',
        'Leer (Lv 1)',
        'Rage (Lv 7)',
        'Water Gun (Lv 13)',
        'Bite (Lv 21)',
        'Scary Face (Lv 28)'
      ],
    };
  }

  getFeraligatr() {
    return {
      name: 'Feraligatr',
      image: './Water/feraligatr.jpg',
      health: 85,
      attack: 105,
      defense: 100,
      Specialattack: 79,
      Specialdefense: 83,
      speed: 78,
      total: 530,
      type: 'Water',
      Moves: [
        'Scratch (Lv 1)',
        'Leer (Lv 1)',
        'Rage (Lv 7)',
        'Water Gun (Lv 13)',
        'Bite (Lv 21)',
        'Scary Face (Lv 28)',
        'Slash (Lv 37)',
        'Screech (Lv 45)',
        'Hydro Pump (Lv 58)'
      ],
    };
  }
}
