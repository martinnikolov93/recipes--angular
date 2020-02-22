import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Router } from '@angular/router';
import { LoaderServiceService } from 'src/app/loader-service.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private loaderService: LoaderServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  handleRecipeCreation({ name, description, image }: { name: string, description: string, image:string }){
    this.loaderService.showLoader();

    this.recipeService.createRecipe({ name, description, image }).subscribe(recipeInfo => {
      this.loaderService.hideLoader();
      this.router.navigate([`recipe/details/${recipeInfo["_id"]}`]);
      console.log(recipeInfo);
    });
  }

}
