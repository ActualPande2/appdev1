import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pryce } from './pryce';

describe('Pryce', () => {
  let component: Pryce;
  let fixture: ComponentFixture<Pryce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pryce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pryce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
