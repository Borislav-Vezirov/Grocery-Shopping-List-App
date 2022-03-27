import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IIngredient[] = [
    {
      name: 'Tomatoes',
      amount: 5
    },
    {
      name: 'Garlic',
      amount: 2
    },
    {
      name: 'Apples',
      amount: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: IIngredient){

    this.ingredients.push(ingredient);
  }

}
