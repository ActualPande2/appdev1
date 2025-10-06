import { TestBed } from '@angular/core/testing';

import { LegendaryPokemon } from './legendary-pokemon';

describe('LegendaryPokemon', () => {
  let service: LegendaryPokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegendaryPokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
