import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PryceComponent } from './pryce.component';

describe('PryceComponent', () => {
  let component: PryceComponent;
  let fixture: ComponentFixture<PryceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PryceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PryceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
