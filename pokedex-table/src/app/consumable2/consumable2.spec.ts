import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumable2 } from './consumable2';

describe('Consumable2', () => {
  let component: Consumable2;
  let fixture: ComponentFixture<Consumable2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Consumable2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumable2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
