import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jasmine } from './jasmine';

describe('Jasmine', () => {
  let component: Jasmine;
  let fixture: ComponentFixture<Jasmine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jasmine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jasmine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
