import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyndaquil } from './cyndaquil';

describe('Cyndaquil', () => {
  let component: Cyndaquil;
  let fixture: ComponentFixture<Cyndaquil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cyndaquil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cyndaquil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
