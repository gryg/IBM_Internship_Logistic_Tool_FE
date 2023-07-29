import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name = 'Name';
  email = 'name.example@yahoo.com';
  id = '123';
  showGradePopup = false;

  constructor(private router: Router) {}

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

  showStudentTable = false; // Variable to control table visibility

  openStudentTable(): void {
    this.showStudentTable = true;
  }

  closeStudentTable(): void {
    this.showStudentTable = false;
  }
 




  
  
}
