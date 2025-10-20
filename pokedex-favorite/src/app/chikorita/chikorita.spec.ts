import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chikorita } from './chikorita';

describe('Chikorita', () => {
  let component: Chikorita;
  let fixture: ComponentFixture<Chikorita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chikorita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chikorita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
