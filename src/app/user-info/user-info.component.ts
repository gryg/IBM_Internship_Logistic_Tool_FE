import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentsDataGradingService} from '../students-data-grading.service'


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [StudentsDataGradingService]
})
export class UserInfoComponent implements OnInit {
receivedStudentsInfo2: string []=[];

  

  


  name = 'Name';
  email = 'name.example@yahoo.com';
  id = '123';
  showGradePopup = false;

  constructor(private router: Router,private sservice:StudentsDataGradingService) {}

  ngOnInit(): void {}

  isOnMentorPage(): boolean {
    return this.router.url.includes('/mentor') ;
  }

  isOnStudentPage(): boolean {
    return this.router.url.includes('/student') || this.router.url.includes('/leader');
  }

  openGradePopup(): void {
    this.showGradePopup = true;
  }
/*
  studentData = [
    {
      session: 'Session 1',
      grades: '7',
      comments: 'Excellent',
      attendance: 'Present'
    },
    {
      session: 'Session 2',
      grades: '9',
      comments: 'Good',
      attendance: 'Present'
    },
    {
      session: 'Session 3',
      grades: '9',
      comments: 'Good job',
      attendance: 'Present'
    },
    {
      session: 'Session 4',
      grades: '10',
      comments: 'Well done',
      attendance: 'Absent'
    }
 
  ];
*/
  showStudentTable = false; // Variable to control table visibility

 


  receivedInfo2() {
    this.receivedStudentsInfo2 = this.sservice.getStudentsDataInfo2();
  }

  openStudentTable(): void {
    this.showStudentTable = true;
    this.receivedInfo2();
  }

  closeStudentTable(): void {
    this.showStudentTable = false;
  }


  
  
}
