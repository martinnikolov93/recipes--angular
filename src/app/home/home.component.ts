import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';
import { LoaderServiceService } from '../loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    if (this.userService.isLogged){
      this.recipeService.getAllRecipes();
    }
  }

  get recipes(){
    return this.recipeService.recipes;
  }

  get isLogged(){
    return this.userService.isLogged;
  }

  
}
