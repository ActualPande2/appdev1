import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ampharos } from './ampharos';

describe('Ampharos', () => {
  let component: Ampharos;
  let fixture: ComponentFixture<Ampharos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ampharos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ampharos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
