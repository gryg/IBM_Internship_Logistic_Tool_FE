import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LeaderComponent } from './leader/leader.component';
import { MentorComponent } from './mentor/mentor.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivityBarComponent } from './activity-bar/activity-bar.component';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CalendarComponent } from './calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { TeamCardNameComponent } from './team-card-name/team-card-name.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddToActivityComponent } from './add-to-activity/add-to-activity.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamGradeComponent } from './team-grade/team-grade.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    ToolbarComponent,
    LeaderComponent,
    MentorComponent,
    UserInfoComponent,
    UserTableComponent,
    UserTableComponent,
    ActivityBarComponent,
    CalendarComponent,
    TeamCardNameComponent,
    EditProfileComponent,
    AddToActivityComponent,
    AddTeamComponent,
    TeamGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
