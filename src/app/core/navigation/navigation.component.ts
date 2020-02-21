import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserService) { }

  get userId() {
    return this.userService.getUserId;
  }

  get isLogged() {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
  }

  handleLogout() {
    this.userService.logout();
  }
}
