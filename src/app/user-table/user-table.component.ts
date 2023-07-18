import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Session {
  session: string;
  grade: string;
  comment: string;
}

export interface User {
  name: string;
  email: string;
  joinDate: string;
  status: string;
  attendance?: string;
  session?: Session[];
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  
  @Input() page?: string;
  @Input() dataSource?: User[];

  displayedColumns: string[] = ['name', 'email', 'joinDate', 'status'];
  tableDataSource!: MatTableDataSource<User>;  //The operator! is used to indicate that we know the property will be defined before it is used, and thus tells TypeScript to ignore checking for initialization in the constructor
  selectedUser?: User;


  constructor() {}

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource<User>(this.dataSource || []);

    if (this.page === 'leader') {
      this.displayedColumns.push('delete');
    } else if (this.page === 'mentor') {
      this.displayedColumns.push('attendance','showSessions');
    }
  }


  onAttendanceChange(checked: boolean, user: User) {
    //Updates the value in the data model
    user.attendance = checked ? 'yes' : 'no';
    // Or send a request to the server to update the value in the database
    
  }

  onDeleteUser(user: User): void {
    // add the logic to delete the user from the data source
    // example: use a service to perform the delete from the backend
    // and update the data source to reflect the changes
  }

  onShowSessions(user: User) {
    this.selectedUser = user;
  }

  hideSessions() {
    this.selectedUser = undefined;
  }
  

}

