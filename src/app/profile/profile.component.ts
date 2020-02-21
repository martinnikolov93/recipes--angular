import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id){
      this.recipeService.getUserRecipes(this.activatedRoute.snapshot.params.id);
    }
  }

  get username() {
    return this.userService.getUsername;
  }

  get userId() {
    return this.userService.getUsername;
  }

  get userRecipes (){
    return this.recipeService.userRecipes;
  }

}
