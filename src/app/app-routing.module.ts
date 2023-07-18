import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { LeaderComponent } from './leader/leader.component';
import { MentorComponent } from './mentor/mentor.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'student', component:StudentComponent},
  {path: 'leader', component:LeaderComponent},
  {path: 'mentor', component:MentorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
