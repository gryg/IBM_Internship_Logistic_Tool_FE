import { Component, Input } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.css'],
  
 
 
})
export class ActivityBarComponent {

  
  @Input() page: string = ''; 

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

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.selected = null;
  }
  
/*showEditProfilePopup = false;
  openCalendar() {
    
    this.showEditProfilePopup = true;
  }
*/
  
}