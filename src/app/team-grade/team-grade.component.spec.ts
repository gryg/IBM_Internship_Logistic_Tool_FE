import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGradeComponent } from './team-grade.component';

describe('TeamGradeComponent', () => {
  let component: TeamGradeComponent;
  let fixture: ComponentFixture<TeamGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamGradeComponent]
    });
    fixture = TestBed.createComponent(TeamGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
