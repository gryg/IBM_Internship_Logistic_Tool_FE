import { Component,Input  } from '@angular/core';
import { Router } from '@angular/router';
import {StudentsDataGradingService} from '../students-data-grading.service'

@Component({
  selector: 'app-student-gradeing',
  templateUrl: './student-gradeing.component.html',
  styleUrls: ['./student-gradeing.component.css'],
  providers: [StudentsDataGradingService]
})
export class StudentGradeingComponent {
  @Input() studentData: any[] = [];
  receivedStudentsInfo2: string[] = [];

  constructor(private router: Router, private sservice: StudentsDataGradingService) {}

  receivedInfo2() {
    this.receivedStudentsInfo2 = this.sservice.getStudentsDataInfo2();
  }
  openStudentTable(): void {
    this.showStudentTable = true;
    this.receivedInfo2(); // Fetch student data using the service
  }











  @Input() data: any[] = [];

  showEditProfilePopup = false;
  session: string = '';
  grade: string = '';
  comment: string = '';
  attendance: string = '';
  showGradePopup=false;




  showStudentTable = false; 

 

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
