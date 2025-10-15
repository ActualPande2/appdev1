import { Injectable } from '@angular/core';

export interface Berry {
  name: string;
  flavor: string;
  effect: string;
}

@Injectable({ providedIn: 'root' })
export class BerriesService {
  getBerries(): Berry[] {
    return [
      { name: 'Oran Berry', flavor: 'Sweet', effect: 'Restores 10 HP'},
      { name: 'Sitrus Berry', flavor: 'Bitter', effect: 'Restores 25% HP'},
      { name: 'Leppa Berry', flavor: 'Spicy', effect: 'Restores 10 PP'},
      { name: 'Aspear Berry', flavor: 'Sour', effect: 'Cures Paralysis'},
      { name: 'Iapapa Berry', flavor: 'Sour', effect: 'Restores a large amount of HP but can cause confusion'}
    ];
  }
}
