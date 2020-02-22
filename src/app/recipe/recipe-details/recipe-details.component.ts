import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { LoaderServiceService } from 'src/app/loader-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: IRecipe;

  get isCreator() {
    return this.recipe._acl["creator"] === localStorage.getItem('id');
  }

  constructor(
    private recipeService: RecipeService,
    private loaderSevice: LoaderServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.loaderSevice.showLoader();
      this.recipeService.getRecipe(this.activatedRoute.snapshot.params.id).subscribe(recipeInfo => {
        this.recipe = recipeInfo;
        this.loaderSevice.hideLoader();
      });
    }
  }

}
