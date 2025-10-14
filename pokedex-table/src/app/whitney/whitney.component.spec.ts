import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitneyComponent } from './whitney.component';

describe('WhitneyComponent', () => {
  let component: WhitneyComponent;
  let fixture: ComponentFixture<WhitneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhitneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
