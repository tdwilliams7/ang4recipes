import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodSearchService } from '../food-search.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  providers: [HttpClient, FoodSearchService]
})
export class SelectorComponent implements OnInit {

  constructor(private _foodSearchService: FoodSearchService) { }
  searchByFood(value){
    this._foodSearchService.searchRecipes(value).subscribe();

  }

  ngOnInit() {
  }

}
