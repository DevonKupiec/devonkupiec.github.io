var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list-add.component";
import { shoppingListRouting } from "./shopping-list.rouing";
import { SharedModule } from "../shared/shared.module";
export var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = __decorate([
        NgModule({
            imports: [
                FormsModule,
                SharedModule,
                shoppingListRouting
            ],
            exports: [ShoppingListComponent],
            declarations: [
                ShoppingListComponent,
                ShoppingListAddComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingListModule);
    return ShoppingListModule;
}());
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/app/shopping-list/shopping-list.module.js.map