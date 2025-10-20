import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirePokemonService {
  getCyndaquil() {
    return {
      name: 'Cyndaquil',
      image: './Fire/cyndaquil.jpg',
      health: 39,
      attack: 52,
      defense: 43,
      Specialattack: 60,
      Specialdefense: 50,
      speed: 65,
      type: 'Fire',
      total: 309,
      Moves: [
        'Tackle (Lv 1)',
        'Leer (Lv 1)',
        'Smokescreen (Lv 6)',
        'Ember (Lv 12)'
      ],
    };
  }

  getQuilava() {
    return {
      name: 'Quilava',
      image: './Fire/quilava.jpg',
      health: 58,
      attack: 64,
      defense: 58,
      Specialattack: 80,
      Specialdefense: 65,
      speed: 80,
      total: 405,
      type: 'Fire',
      Moves: [
        'Tackle (Lv 1)',
        'Leer (Lv 1)',
        'Smokescreen (Lv 6)',
        'Ember (Lv 12)',
        'Quick Attack (Lv 21)',
        'Flame Wheel (Lv 31)'
      ],
    };
  }

  getTyphlosion() {
    return {
      name: 'Typhlosion',
      image: './Fire/typhlosion.jpg',
      health: 78,
      attack: 84,
      defense: 78,
      Specialattack: 109,
      Specialdefense: 85,
      speed: 100,
      total: 534,
      type: 'Fire',
      Moves: [
        'Tackle (Lv 1)',
        'Leer (Lv 1)',
        'Smokescreen (Lv 6)',
        'Ember (Lv 12)',
        'Quick Attack (Lv 21)',
        'Flame Wheel (Lv 31)',
        'Swift (Lv 45)',
        'Flamethrower (Lv 60)'
      ],
    };
  }
}
