import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input() recipe: IRecipe; 

   @Output() recipeSelected = new EventEmitter<void>();

   onSelected(){

    this.recipeSelected.emit();
   }

  constructor() { }

  ngOnInit(): void {
  }

}
