import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morty } from './morty';

describe('Morty', () => {
  let component: Morty;
  let fixture: ComponentFixture<Morty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Morty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
