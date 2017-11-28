import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SavedRecipesService {
  private url = `receiver/`;

  constructor(private http: Http) { }
  getSavedRecipes() {
    return this.http.get('/api/myrecipes')
      .map(res => res.json());
  }
  removeRecipe(id) {
    return this.http.delete('/api/myrecipes/' + id).map(res => res.json())
  }
}
