import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataGradingService {
  studentData: any[] = [
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


  constructor() { }


  getStudentsDataInfo2():string[]{
    return this.studentData;
  }
}
