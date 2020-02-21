import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IRecipe } from './shared/interfaces/recipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private appKey: string = 'kid_r1Pn8XhsB';
  private appSecret: string = '1863a9ec03cc47a99cf6d4912a7e6ff1';

  recipes: IRecipe[];
  userRecipes: IRecipe[];

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  createRecipe({ name, description, image }) {
    let url = "https://baas.kinvey.com/appdata/kid_r1Pn8XhsB/recipes";
    let data = { name, description, image };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
      })
    };

    return this.http.post(url, data, httpOptions);
  }

  getRecipe(recipeId: string) {
    let url = `https://baas.kinvey.com/appdata/kid_r1Pn8XhsB/recipes/${recipeId}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
      })
    };

    return this.http.get<IRecipe>(url, httpOptions);
  }

  getAllRecipes() {
    let url = `https://baas.kinvey.com/appdata/kid_r1Pn8XhsB/recipes/`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
      })
    };

    return this.http.get<IRecipe[]>(url, httpOptions).subscribe(recipesArray => {
      this.recipes = recipesArray;
    });
  }

  getUserRecipes(id: string) {
    let url = `https://baas.kinvey.com/appdata/kid_r1Pn8XhsB/recipes/?query={"_acl.creator":"${id}"}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
      })
    };

    return this.http.get<IRecipe[]>(url, httpOptions).subscribe(userRecipesArray => {
      console.log(userRecipesArray);
      this.userRecipes = userRecipesArray;
    });
  }

  updateRecipe(id: string, { name, description, image }) {
    let url = `https://baas.kinvey.com/appdata/kid_r1Pn8XhsB/recipes/${id}`;
    let data = { name, description, image };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`
      })
    };

    return this.http.put<IRecipe>(url, data, httpOptions).subscribe(updatedRecipe => {
      console.log(updatedRecipe);
      this.router.navigate([`recipe/details/${updatedRecipe._id}`])
    });
  }
}
