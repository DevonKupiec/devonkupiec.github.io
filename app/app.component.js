var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr";
import { RecipeService } from "./recipes/recipe.service";
export var AppComponent = (function () {
    function AppComponent(toastr, vRef, recipeService) {
        this.toastr = toastr;
        toastr.setRootViewContainerRef(vRef);
        recipeService.fetchData();
    }
    AppComponent = __decorate([
        Component({
            selector: 'rb-root',
            templateUrl: './app.component.html',
        }), 
        __metadata('design:paramtypes', [ToastsManager, ViewContainerRef, RecipeService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/app/app.component.js.map