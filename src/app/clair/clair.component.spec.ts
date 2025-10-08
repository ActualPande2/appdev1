import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClairComponent } from './clair.component';

describe('ClairComponent', () => {
  let component: ClairComponent;
  let fixture: ComponentFixture<ClairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
