import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes.service';
import { SavedRecipesService } from '../saved-recipes.service'
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
  providers: [RecipesService, HttpClient]
})
export class FoodCardComponent implements OnInit {
  private recipes: Array<any>;

  constructor(private _recipeService: RecipesService) { }
  addSavedRecipes($event){
    this._recipeService.addRecipe($event).map((res: Response) => res.json());
  }

  ngOnInit() {
    this._recipeService.getRecipes().subscribe(data =>{
      this.recipes = data.hits;
    });
  }

}
