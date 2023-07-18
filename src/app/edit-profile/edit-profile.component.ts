import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  showEditProfilePopup = false;
  name: string = '';
  email: string = '';
  profilePhoto: File | undefined;

  openEditProfilePopup() {
    this.showEditProfilePopup = true;
  }

  closeEditProfilePopup() {
    this.showEditProfilePopup = false;
    this.name = '';
    this.email = '';
    this.profilePhoto = undefined;
  }

  onFileChange(event: any) {
    this.profilePhoto = event.target.files[0];
  }

  saveProfile() {
    console.log('Saving profile...');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Profile Photo:', this.profilePhoto);

    this.closeEditProfilePopup();
  }
 
}
