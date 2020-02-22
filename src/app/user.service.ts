import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { LoaderServiceService } from './loader-service.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private appKey: string = 'kid_r1Pn8XhsB';
  private appSecret:string = '1863a9ec03cc47a99cf6d4912a7e6ff1';
  private isLoggedIn: boolean = localStorage.length === 0 ? false : true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private recipeService: RecipeService,
    private loaderService: LoaderServiceService
    ) { }
  
  get getUserId() {
    return localStorage.getItem('id');
  }

  get getUsername(){
    return localStorage.getItem('username');
  }
  
  get isLogged (){
    return this.isLoggedIn;
  }

  register({ username, password }){
    this.loaderService.showLoader();

    let url = "https://baas.kinvey.com/user/kid_r1Pn8XhsB"; 
    let data = { username, password };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      })
    };

    return this.http.post(url, data ,httpOptions).subscribe(userInfo => {
      localStorage.setItem('authtoken', userInfo["_kmd"]["authtoken"]);
      localStorage.setItem('username', userInfo["username"]);
      localStorage.setItem('id', userInfo["_id"]);

      this.isLoggedIn = true;

      this.loaderService.hideLoader();

      this.router.navigate([""]);
    });
  }

  login({ username, password }){
    this.loaderService.showLoader();

    let url = "https://baas.kinvey.com/user/kid_r1Pn8XhsB/login"; 
    let data = { username, password };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      })
    };

    return this.http.post(url, data, httpOptions).subscribe(userInfo => {
      localStorage.setItem('authtoken', userInfo["_kmd"]["authtoken"]);
      localStorage.setItem('username', userInfo["username"]);
      localStorage.setItem('id', userInfo["_id"]);

      this.isLoggedIn = true;

      this.loaderService.hideLoader();

      this.router.navigate([""]);
    });
  }

  logout(){
    this.recipeService.recipes = [];
    this.recipeService.userRecipes = [];
    this.isLoggedIn = false;
    localStorage.clear();
    
    this.router.navigate([""]);
  }

  
}
