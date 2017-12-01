import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes.service';
import { SavedRecipesService } from '../saved-recipes.service'
import { FoodSearchService } from '../food-search.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
  providers: [RecipesService, HttpClient, FoodSearchService]
})
export class FoodCardComponent implements OnInit {
  private recipes;
  private stuff;


  constructor(private _recipeService: RecipesService, private _foodSearchService: FoodSearchService) { }
  addSavedRecipes($event){
    this._recipeService.addRecipe($event);
    alert('Added to your saved recipes!')
  }

  //selector.component should pass in some sort of meat.
  searchByFood(food){
    this._recipeService.getRecipes(food).subscribe(data => {
      this.stuff = data;
      this.recipes = this.stuff.hits;
    })
  }

  ngOnInit() {
    this._recipeService.getRecipes('fish').subscribe(data =>{
      this.stuff = data;
      this.recipes = this.stuff.hits;
    });
  }

}
