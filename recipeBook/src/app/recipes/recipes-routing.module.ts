import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {AuthGuard} from "../auth/auth-guard.service";

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailsComponent },
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipesRoutingModule {

}
