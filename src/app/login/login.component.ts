import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  selectedRole: string = '';


  constructor(private router: Router) {} 

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Role:', this.selectedRole);

    switch (this.selectedRole) {
      case 'mentor':
        this.router.navigate(['/mentor']);
        break;
      case 'student':
        this.router.navigate(['/student']);
        break;
      case 'leader':
        this.router.navigate(['/leader']);
        break;
      default:
        break;
    }
  }
}
