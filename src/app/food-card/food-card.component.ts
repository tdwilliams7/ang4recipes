import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
  providers: [RecipesService, HttpClient]
})
export class FoodCardComponent implements OnInit {
  private recipes: Array;

  constructor(private _recipeService: RecipesService) { }

  ngOnInit() {
    this._recipeService.getRecipes().subscribe(data =>{
      this.recipes = data.hits;
      console.log(this.recipes);
    });
  }

}
