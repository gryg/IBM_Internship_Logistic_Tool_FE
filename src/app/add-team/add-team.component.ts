import { Component } from '@angular/core';


export interface TeamMember {
  name: string;
  email: string;
}

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  showAddProfilePopup = false;
  name: string = '';
  name2: string = '';
  email: string = '';
  

  openAddPopup() {
    this.showAddProfilePopup = true;
  }

  closeAddPopup() {
    this.showAddProfilePopup = false;
    this.name = '';
    this.name2 = '';
    this.email = '';
  }

  onFileChange(event: any) {
    this.email = event.target.files[0];
  }

  AddProfile() {
    console.log('Saving profile...');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Profile Photo:', this.email);

    this.closeAddPopup();


    if (this.teamMembers.length < 5) {
      const newTeamMember = {
        name: this.name2,
        email: this.email,
      };
      this.teamMembers.push(newTeamMember);
    } else {
      console.log("Maximum team members limit reached (5).");
    }
  }





  teamMembers: any[] = [];
}
