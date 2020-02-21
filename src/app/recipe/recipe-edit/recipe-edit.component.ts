import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: IRecipe;

  form: FormGroup;

  get isCreator() {
    return this.recipe._acl["creator"] === localStorage.getItem('id');
  }

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private fb:FormBuilder,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.recipeService.getRecipe(this.activatedRoute.snapshot.params.id).subscribe(recipeInfo => {
        this.recipe = recipeInfo;

        if (!this.isCreator) {
          this.router.navigate([""])
        }

        this.form = this.fb.group({
          name: [recipeInfo.name , [Validators.required]],
          description: [recipeInfo.description , [Validators.required]],
          image: [recipeInfo.image , [Validators.required]]
        })
        
      });
    }
    
  }

  handleRecipeEdit({ name, description, image }: { name: string, description: string, image: string }) {
    this.recipeService.updateRecipe(this.activatedRoute.snapshot.params.id, { name, description, image });
  }

}
