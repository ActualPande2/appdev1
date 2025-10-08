import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsyComponent } from './bugsy.component';

describe('BugsyComponent', () => {
  let component: BugsyComponent;
  let fixture: ComponentFixture<BugsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugsyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
