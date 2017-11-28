import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes.service';
import { SavedRecipesService } from '../saved-recipes.service'
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';



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
    this._recipeService.addRecipe($event);
    alert('Added to your saved recipes!')
  }

  ngOnInit() {
    this._recipeService.getRecipes().subscribe(data =>{
      this.recipes = data.hits;
    });
  }

}
