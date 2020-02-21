import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin({ username, password }: { username: string, password: string }){
    this.userService.login({ username, password }).subscribe(userInfo => {
      localStorage.setItem('authtoken', userInfo["_kmd"]["authtoken"]);
      localStorage.setItem('username', userInfo["username"]);
      localStorage.setItem('id', userInfo["_id"]);

      this.router.navigate([""]);
    })
  }

}
