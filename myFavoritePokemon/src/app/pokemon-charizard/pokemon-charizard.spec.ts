import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharizard } from './pokemon-charizard';

describe('PokemonCharizard', () => {
  let component: PokemonCharizard;
  let fixture: ComponentFixture<PokemonCharizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCharizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCharizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
