import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ditto } from './ditto';

describe('Ditto', () => {
  let component: Ditto;
  let fixture: ComponentFixture<Ditto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ditto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ditto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
