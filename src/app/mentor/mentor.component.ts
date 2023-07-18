import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent {

  studentsData: any[] = [
    { name: 'John Doe', email: 'john.doe@example.com', joinDate: '2021-01-01', status: 'Leader', attendance:'yes', session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
      { session: 'session3', grade: '8', comment: 'Good!' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
    ], },
    { name: 'Jane Smith', email: 'jane.smith@example.com', joinDate: '2021-02-15', status: 'Student', attendance:'yes', session: [
      { session: 'session1', grade: '8', comment: 'Good job' },
      { session: 'session2', grade: '9', comment: 'Excellent work' },
    ], },

    { name: 'Mihai Popescu', email: 'mihai.popescu@example.com', joinDate: '2021-02-15', status: 'Student', attendance:'yes', session: [
      { session: 'session1', grade: '8', comment: 'Great work!' },
      { session: 'session2', grade: '9', comment: 'Excellent work' },
      { session: 'session3', grade: '9', comment: 'Excellent work' },
      { session: 'session4', grade: '9', comment: 'Excellent work' },
      { session: 'session5', grade: '9', comment: 'Excellent work' },
      { session: 'session6', grade: '9', comment: 'Excellent work' },
      { session: 'session7', grade: '9', comment: 'Excellent work' },
      { session: 'session8', grade: '9', comment: 'Excellent work' },
    ], },

    { name: 'Maria Smith', email: 'maria.smith@example.com', joinDate: '2021-01-01', status: 'Student', attendance:'yes', session: [
      { session: 'session1', grade: '10', comment: 'Great work!' },
      { session: 'session2', grade: '7', comment: 'Needs improvement' },
    ], },
    { name: 'Andreea Negru', email: 'andreea.negru@example.com', joinDate: '2021-02-15', status: 'Student', attendance:'yes', session: [
      { session: 'session1', grade: '8', comment: 'Good job' },
      { session: 'session2', grade: '9', comment: 'Excellent work' },
    ], },
  ];
}
