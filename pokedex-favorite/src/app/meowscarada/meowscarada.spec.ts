import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meowscarada } from './meowscarada';

describe('Meowscarada', () => {
  let component: Meowscarada;
  let fixture: ComponentFixture<Meowscarada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Meowscarada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meowscarada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
