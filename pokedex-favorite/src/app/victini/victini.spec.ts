import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Victini } from './victini';

describe('Victini', () => {
  let component: Victini;
  let fixture: ComponentFixture<Victini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Victini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Victini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
