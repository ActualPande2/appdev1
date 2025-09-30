import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bugsy } from './bugsy';

describe('Bugsy', () => {
  let component: Bugsy;
  let fixture: ComponentFixture<Bugsy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bugsy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bugsy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
