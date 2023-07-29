import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradeingComponent } from './student-gradeing.component';

describe('StudentGradeingComponent', () => {
  let component: StudentGradeingComponent;
  let fixture: ComponentFixture<StudentGradeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentGradeingComponent]
    });
    fixture = TestBed.createComponent(StudentGradeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
