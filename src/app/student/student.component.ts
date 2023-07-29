import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentsData: any[] = [
    { name: 'John Doe', email: 'john.doe@example.com', joinDate: '2021-01-01', status: 'Leader' ,session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
      { session: 'session3', grade: '8', comment: 'Good!' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
    ], },
    { name: 'Jane Smith', email: 'jane.smith@example.com', joinDate: '2021-02-15', status: 'Student',session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
      { session: 'session3', grade: '8', comment: 'Good!' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
    ], },
    { name: 'Mihai Popescu', email: 'mihai.popescu@example.com', joinDate: '2021-02-15', status: 'Student',session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
      { session: 'session3', grade: '8', comment: 'Good!' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
    ], },
    { name: 'Maria Smith', email: 'maria.smith@example.com', joinDate: '2021-01-01', status: 'Student' ,session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '8', comment: 'Good!' },
      { session: 'session3', grade: '9', comment: 'Excellent work' },
      { session: 'session4', grade: '8', comment: 'Good!' },
    
    ], },
    { name: 'Andreea Negru', email: 'andreea.negru@example.com', joinDate: '2021-02-15', status: 'Student',session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
      { session: 'session3', grade: '8', comment: 'Good!' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
    ], }
  ];
  

}


