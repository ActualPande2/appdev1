import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Totodile } from './totodile';

describe('Totodile', () => {
  let component: Totodile;
  let fixture: ComponentFixture<Totodile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Totodile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Totodile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
