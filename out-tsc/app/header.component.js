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
import { RecipeService } from "./recipes/recipe.service";
import { ToastsManager } from "ng2-toastr";
export var HeaderComponent = (function () {
    function HeaderComponent(recipeService, toastr, vRef) {
        this.recipeService = recipeService;
        this.toastr = toastr;
        toastr.setRootViewContainerRef(vRef);
    }
    HeaderComponent.prototype.onStore = function () {
        var _this = this;
        this.recipeService.storeData().subscribe(function (data) {
            console.log(data);
            _this.toastr.success("Recipe list saved", "Success");
        }, function (error) {
            console.log(error);
            _this.toastr.error("Recipe list failed to save!", "Error");
        });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.recipeService.fetchData();
        //this.toastr.success("Recipe list retrieved", "Success");
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'rb-header',
            templateUrl: './header.component.html',
        }), 
        __metadata('design:paramtypes', [RecipeService, ToastsManager, ViewContainerRef])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/app/header.component.js.map