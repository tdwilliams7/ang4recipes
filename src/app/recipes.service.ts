import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
    private url = `receiver/`;

  constructor(private http: Http) { }
  getRecipes(): Observable<any>{
      return this.http.get("https://api.edamam.com/search?q=chicken&app_id=933b24e9&app_key=5ec51a21d4c001a6109da140caf5ecef")
      .map((res: Response) => res.json());
  }
}
