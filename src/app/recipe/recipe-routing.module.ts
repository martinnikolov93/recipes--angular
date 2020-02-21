import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AuthGuard } from '../auth.guard';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "recipe/create",
    component: RecipeCreateComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: "recipe/details/:id",
    component: RecipeDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: "recipe/edit/:id",
    component: RecipeEditComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
