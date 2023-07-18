import { Component } from '@angular/core';

@Component({
  selector: 'app-team-grade',
  templateUrl: './team-grade.component.html',
  styleUrls: ['./team-grade.component.css']
})
export class TeamGradeComponent {
  isActive = false;

  toggleActiveState(): void {
    this.isActive = !this.isActive;
  }
}
