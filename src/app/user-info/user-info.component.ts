import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  
    name = 'Name';
    email = 'name.example@yahoo.com';
    id = '123';
    // avatar: 'ig.png'  //image

    constructor(){}

    ngOnInit():void{
    }
    showEditProfilePopup = false;

    openEditProfilePopup() {
      this.showEditProfilePopup = true;
    }
}
