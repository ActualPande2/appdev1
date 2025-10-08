import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderList } from './leader-list';

describe('LeaderList', () => {
  let component: LeaderList;
  let fixture: ComponentFixture<LeaderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
