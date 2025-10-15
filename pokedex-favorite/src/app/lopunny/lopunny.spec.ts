import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lopunny } from './lopunny';

describe('Lopunny', () => {
  let component: Lopunny;
  let fixture: ComponentFixture<Lopunny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lopunny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lopunny);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
