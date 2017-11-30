import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
    private url = `receiver/`;

  constructor(private http: HttpClient) { }
  getRecipes(value){
      return this.http.get("https://api.edamam.com/search?q=" + value +"&app_id=933b24e9&app_key=5ec51a21d4c001a6109da140caf5ecef")
      .map(res => res);
  }

  // coming from food-card.component
  addRecipe($event){
    console.log($event)
    let body = {
      name: $event.label,
      image: $event.image,
      uri: $event.uri,
      url: $event.url,
      source: $event.source,
      ingredients: $event.ingredients,
    };
    const req = this.http.post('/api/myrecipes', body)

    req.subscribe();
  }
}
