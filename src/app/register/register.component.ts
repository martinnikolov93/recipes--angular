import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister({ username, password }: { username: string, password: string }){
    this.userService.register({ username, password });
  }

}
