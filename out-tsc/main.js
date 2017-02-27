import "./polyfills.ts";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";
import { AppModule } from "./app/app.module";
import { ShoppingListService } from "./app/shopping-list/shopping-list.service";
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, [ShoppingListService]);
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/main.js.map