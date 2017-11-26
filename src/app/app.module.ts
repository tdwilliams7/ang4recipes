import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodCardComponent,
    SavedRecipesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
