import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  showAdditionalButtons = false;

  toggleAdditionalButtons() {
    this.showAdditionalButtons = !this.showAdditionalButtons;
}
}
