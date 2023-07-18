import { Component } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent {


  studentsData: any[] = [
    { name: 'John Doe', email: 'john.doe@example.com', joinDate: '2021-01-01', status: 'Leader' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', joinDate: '2021-02-15', status: 'Student'},
    { name: 'Mihai Popescu', email: 'mihai.popescu@example.com', joinDate: '2021-02-15', status: 'Student'},
    { name: 'Maria Smith', email: 'maria.smith@example.com', joinDate: '2021-01-01', status: 'Student' },
    { name: 'Andreea Negru', email: 'andreea.negru@example.com', joinDate: '2021-02-15', status: 'Student' },
  ];
}
