import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/app/app.routing.js.map