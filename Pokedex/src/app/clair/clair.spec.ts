import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clair } from './clair';

describe('Clair', () => {
  let component: Clair;
  let fixture: ComponentFixture<Clair>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clair]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clair);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
