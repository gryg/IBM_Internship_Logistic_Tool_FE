import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  constructor(private router: Router) { }

  showAdditionalButtons = false;

  toggleAdditionalButtons() {
    this.showAdditionalButtons = !this.showAdditionalButtons;
}

  goBackToLogin() {
  // Use the router to navigate back to the login page
  this.router.navigateByUrl('/');
}
}
