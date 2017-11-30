import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodSearchService {

  constructor(private http: HttpClient) { }
  searchRecipes(food): Observable<any>{
    console.log(food);
      return this.http.get("https://api.edamam.com/search?q=" + food +"&app_id=933b24e9&app_key=5ec51a21d4c001a6109da140caf5ecef")
      .map((res: Response) => res);
  }
}
