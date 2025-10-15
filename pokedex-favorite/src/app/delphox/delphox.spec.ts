import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delphox } from './delphox';

describe('Delphox', () => {
  let component: Delphox;
  let fixture: ComponentFixture<Delphox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Delphox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delphox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
