import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chuck } from './chuck';

describe('Chuck', () => {
  let component: Chuck;
  let fixture: ComponentFixture<Chuck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chuck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chuck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
