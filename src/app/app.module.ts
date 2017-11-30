import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { SelectorComponent } from './selector/selector.component';
import { RoundPipe } from './round.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FoodCardComponent,
    SavedRecipesComponent,
    SelectorComponent,
    RoundPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
