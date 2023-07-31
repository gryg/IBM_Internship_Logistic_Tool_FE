import { Component, Input, OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Session {
  session: string;
  grade: string;
  comment: string;
  attendance?: string;
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
  template: `
  <div>
    <button (click)="onButtonClick()">Show Dynamic Component</button>
    <ng-container *ngIf="isButtonPushed">
      <app-dynamic-component></app-dynamic-component>
    </ng-container>
  </div>
`
})
export class UserTableComponent implements OnInit {
  
  @Input() page?: string;
  @Input() dataSource?: User[];

  displayedColumns: string[] = ['name', 'email', 'joinDate', 'status'];
  tableDataSource!: MatTableDataSource<User>;  //The operator! is used to indicate that we know the property will be defined before it is used, and thus tells TypeScript to ignore checking for initialization in the constructor
  selectedUser?: User;


 

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource<User>(this.dataSource || []);

    if (this.page === 'leader') {
      this.displayedColumns.push('delete');
    } else if (this.page === 'mentor') {
      this.displayedColumns.push('showAttendance','showSessions','showTeamGrade');
    }
  }



  attendanceChanges: { [sessionId: string]: string } = {};

  gradeChanges: { [sessionId: string]: { grade: string; comment: string } } = {};


 

  onDeleteUser(user: User): void {
 
  }


  selectedActivity: string = '';
  selectedTeam: string = '';
  
  showActivitySelection = true;
  showTeamSelection = false;

  goToTeamSelection(): void {
    this.showActivitySelection = false;
    this.showTeamSelection = true;
  }

  goBackToActivitySelection(): void {
    this.showActivitySelection = true;
    this.showTeamSelection = false;
  }
selected: Date | null;
selectedUserForGrade?: User;
selectedUserForTeamGrade?: User;

dataS: User[] = [];


attendanceForm: FormGroup;
gradeForm: FormGroup;

constructor(private dateAdapter: DateAdapter<Date>, private fb: FormBuilder) {
  this.selected = null;

  this.attendanceForm = this.fb.group({
    session: [''],
    attendance: [''],
  });

  this.gradeForm = this.fb.group({
    session: [''],
    grade: [''],
    comment: [''],
  });
}
onShowAttendanceForm(user: User) {
  this.selectedUser = user;
  this.attendanceForm.patchValue({
    session: '',
    attendance: user.attendance || 'yes', 
  });
}


onSubmitAttendance() {
  if (this.selectedUser) {
    const sessions = this.selectedUser.session || [];

    for (const session of sessions) {
      const sessionId = session.session;
      const attendanceChange = this.attendanceChanges[sessionId];

      if (attendanceChange !== undefined) {
        // Update the attendance based on the change
        session.attendance = attendanceChange === 'yes' ? 'yes' : 'no';
      }
    }

    this.attendanceChanges = {}; // Reset changes
    this.hideSessions();
  }
}

onAttendanceChange(checked: boolean, session: Session) {
  this.attendanceChanges[session.session] = checked ? 'yes' : 'no';
}

onSubmitGrade() {
  if (this.selectedUserForGrade) {
    for (const session of this.selectedUserForGrade.session || []) {
      const gradeData = this.gradeChanges[session.session];
      if (gradeData !== undefined) {
        session.grade = gradeData.grade;
        session.comment = gradeData.comment;
      }
    }

    this.gradeChanges = {}; // Reset changes
    this.hideGrade();
  }
}


onGradeChange(session: Session) {
  this.gradeChanges[session.session] = {
    grade: session.grade,
    comment: session.comment,
  };
}



onShowSessions(user: User) {
  this.selectedUser = user;
  this.selectedUserForGrade = undefined; // Reset the selected user for grade
}


onShowGrade(user: User) {
  this.selectedUserForGrade = user;
  this.gradeChanges = {}; // Reset changes
}

hideSessions() {
  this.selectedUser = undefined;
}

hideGrade() {
  this.selectedUserForGrade = undefined;
}













onShowTeamGrade(user: User): void {
  this.selectedUserForTeamGrade = user;

  // Reset the 'grade' property of each session to an empty string
  if (this.selectedUserForTeamGrade) {
    for (const session of this.selectedUserForTeamGrade.session || []) {
      session.grade = '';
    }
  }
}


// Function to hide the team grade popup table
hideTeamGrade(): void {
  this.selectedUserForTeamGrade = undefined;
}

// Function to handle "Submit Team Grade" button click
onSubmitTeamGrade(): void {
  if (this.selectedUserForTeamGrade && this.dataS) {
    const selectedUserSessions = this.selectedUserForTeamGrade.session;
    if (selectedUserSessions) {
      for (const session of selectedUserSessions) {
        const gradeData = this.gradeChanges[session.session];
        if (gradeData !== undefined) {
          session.grade = gradeData.grade;
          session.comment = gradeData.comment;
        }
      }
    }

    // Update the dataSource with the changes
    const userIndex = this.dataS.findIndex(user => user === this.selectedUserForTeamGrade);
    if (userIndex !== -1 && selectedUserSessions) {
      const updatedSessionArray = [...selectedUserSessions]; // Creating a shallow copy of the session array to trigger change detection
      this.dataS[userIndex].session = updatedSessionArray;
    }

    this.gradeChanges = {}; // Reset changes
    this.hideTeamGrade();

    // Reassign the updated dataSource to tableDataSource
    this.tableDataSource = new MatTableDataSource<User>(this.dataSource);
  }
}
@ViewChild(UserTableComponent) userTableComponent!: UserTableComponent;

onSaveChanges(): void {
  // Perform necessary actions to update dataSource (e.g., fetching data from a service)
  // After updating the dataSource, call the method to save changes in UserTableComponent
  this.userTableComponent.onSubmitTeamGrade();
}



TeamGradeData = [
  {
    grades: '1',
    comments: 'Not Enough'
  },
  {
    grades: '2',
    comments: 'Not Enough',
  },
  {
    grades: '3',
    comments: 'Not Enough'
  },
  {
    grades: '4',
    comments: 'Not Enough'
  },
  {
    grades: '5',
    comments: 'Ok'
  },
  {
    grades: '6',
    comments: 'Good',
  },
  {
    grades: '7',
    comments: 'Good job'
  },
  {
    grades: '8',
    comments: 'Well done'
  },
  {
    grades: '9',
    comments: 'Very good'
  },
  {
    grades: '10',
    comments: 'Excelent'
  }

];
getCommentForGrade(grade: string): string {
  const gradeData = this.TeamGradeData.find(item => item.grades === grade);
  return gradeData ? gradeData.comments : '';
}

}

