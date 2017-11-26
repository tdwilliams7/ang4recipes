import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SavedRecipesService {
    private url = `receiver/`;

  constructor(private http: Http) { }
  getSavedRecipes(): Observable<any>{
      return this.http.get("https://stark-harbor-21921.herokuapp.com/myrecipes")
        .map((res: Response)=> res.json());
  }
}
