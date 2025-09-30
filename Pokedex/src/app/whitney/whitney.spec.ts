import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitney } from './whitney';

describe('Whitney', () => {
  let component: Whitney;
  let fixture: ComponentFixture<Whitney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Whitney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whitney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
