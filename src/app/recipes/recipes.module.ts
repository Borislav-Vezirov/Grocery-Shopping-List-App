import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }
