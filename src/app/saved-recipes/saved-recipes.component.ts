import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedRecipesService } from '../saved-recipes.service'

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css'],
  providers: [SavedRecipesService, HttpClient]
})
export class SavedRecipesComponent implements OnInit {
  private savedRecipes: Array<any>;

  constructor(private _savedRecipesService: SavedRecipesService) { }

  getSavedRecipes() {
    this._savedRecipesService.getSavedRecipes().subscribe(data => {
      if (data < 1) {
        this.savedRecipes = [{
          name: "Add some Recipes"
        }]
      } else {
        this.savedRecipes = data;
      }
    })
  }

  ngOnInit() {
    this.getSavedRecipes();
  }
  removeSavedRecipe($event) {
    this._savedRecipesService.removeRecipe($event)
      .subscribe()

    this.getSavedRecipes();
  }
}
