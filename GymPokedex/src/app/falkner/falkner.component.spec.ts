import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalknerComponent } from './falkner.component';

describe('FalknerComponent', () => {
  let component: FalknerComponent;
  let fixture: ComponentFixture<FalknerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FalknerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalknerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
