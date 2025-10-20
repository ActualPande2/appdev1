import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Umbreon } from './umbreon';

describe('Umbreon', () => {
  let component: Umbreon;
  let fixture: ComponentFixture<Umbreon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Umbreon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Umbreon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
