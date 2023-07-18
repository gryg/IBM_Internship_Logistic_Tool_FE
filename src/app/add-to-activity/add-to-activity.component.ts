import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-activity',
  templateUrl: './add-to-activity.component.html',
  styleUrls: ['./add-to-activity.component.css']
})
export class AddToActivityComponent {
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
  }
 
}
