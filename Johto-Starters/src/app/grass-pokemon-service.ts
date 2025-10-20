import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrassPokemonService {
  getChikorita() {
    return {
      name: 'Chikorita',
      image: './Grass/chikorita.jpg',
      health: 45,
      attack: 49,
      defense: 65,
      Specialattack: 49,
      Specialdefense: 65,
      speed: 45,
      type: 'Grass',
      total: 318,
      Moves: [
        'Tackle (Lv 1)',
        'Growl (Lv 1)',
        'Razor Leaf (Lv 8)',
        'Reflect (Lv 12)',
        'PoisonPowder (Lv 15)'
      ],
    };
  }

  getBayleef() {
    return {
      name: 'Bayleef',
      image: './Grass/bayleef.jpg',
      health: 60,
      attack: 62,
      defense: 80,
      Specialattack: 63,
      Specialdefense: 80,
      speed: 60,
      total: 405,
      type: 'Grass',
      Moves: [
        'Tackle (Lv 1)',
        'Growl (Lv 1)',
        'Razor Leaf (Lv 8)',
        'Reflect (Lv 12)',
        'PoisonPowder (Lv 15)',
        'Synthesis (Lv 23)',
        'Body Slam (Lv 31)'
      ],
    };
  }

  getMeganium() {
    return {
      name: 'Meganium',
      image: './Grass/meganium.jpg',
      health: 80,
      attack: 82,
      defense: 100,
      Specialattack: 83,
      Specialdefense: 100,
      speed: 80,
      total: 525,
      type: 'Grass',
      Moves: [
        'Tackle (Lv 1)',
        'Growl (Lv 1)',
        'Razor Leaf (Lv 8)',
        'Reflect (Lv 12)',
        'PoisonPowder (Lv 15)',
        'Synthesis (Lv 23)',
        'Body Slam (Lv 31)',
        'Light Screen (Lv 41)',
        'Safeguard (Lv 51)',
        'SolarBeam (Lv 61)'
      ],
    };
  }
}
