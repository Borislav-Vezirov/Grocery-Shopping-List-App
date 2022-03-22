import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: IRecipe[] = [

    {
      name: 'This a test',
      description: 'Test Description',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
