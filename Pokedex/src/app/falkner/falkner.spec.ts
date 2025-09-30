import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Falkner } from './falkner';

describe('Falkner', () => {
  let component: Falkner;
  let fixture: ComponentFixture<Falkner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Falkner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Falkner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
