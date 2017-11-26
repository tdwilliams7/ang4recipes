import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCardComponent } from './food-card/food-card.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const routes: Routes =[
    { path: '', redirectTo: '/foods', pathMatch: 'full' },
    { path: 'foods', component: FoodCardComponent },
    { path: 'savedrecipes', component: SavedRecipesComponent }
]


@NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],

    exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }
