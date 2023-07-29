import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-student-gradeing',
  templateUrl: './student-gradeing.component.html',
  styleUrls: ['./student-gradeing.component.css']
})
export class StudentGradeingComponent {
  @Input() data: any[] = [];

  showEditProfilePopup = false;
  session: string = '';
  grade: string = '';
  comment: string = '';
  attendance: string = '';
  showGradePopup=false;




  showStudentTable = false; 

  openStudentTable(): void {
    this.showStudentTable = true;
  }

  closeStudentTable(): void {
    this.showStudentTable = false;
  }

 

  closeTable() {
    this.showEditProfilePopup = false;
    this.session = '';
    this.grade = '';
    this.comment = '';
    this.attendance = '';
  }

}
