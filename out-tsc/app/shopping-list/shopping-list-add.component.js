var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewContainerRef } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/ingredient";
import { EventEmitter } from "@angular/forms/src/facade/async";
import { ToastsManager } from "ng2-toastr";
export var ShoppingListAddComponent = (function () {
    function ShoppingListAddComponent(sls, toastr, vcr) {
        this.sls = sls;
        this.toastr = toastr;
        this.cleared = new EventEmitter();
        this.isAdd = true;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ShoppingListAddComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = { name: null, amount: null };
        }
        else {
            this.isAdd = false;
        }
    };
    ShoppingListAddComponent.prototype.onSubmit = function (form) {
        var ingredient = form.value;
        var newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            this.sls.editItem(this.item, newIngredient);
            this.onClear();
            this.toastr.success('Item edited', 'Success!');
        }
        else {
            this.item = newIngredient;
            this.sls.addItem(this.item);
            this.onClear();
            this.toastr.success('Item added', 'Success!');
        }
    };
    ShoppingListAddComponent.prototype.onDelete = function () {
        this.sls.deleteItem(this.item);
        this.onClear();
        this.toastr.success('Item deleted', 'Success!');
    };
    ShoppingListAddComponent.prototype.onClear = function () {
        this.isAdd = true;
        this.cleared.emit(null);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Ingredient)
    ], ShoppingListAddComponent.prototype, "item", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ShoppingListAddComponent.prototype, "cleared", void 0);
    ShoppingListAddComponent = __decorate([
        Component({
            selector: 'rb-shopping-list-add',
            templateUrl: './shopping-list-add.component.html',
        }), 
        __metadata('design:paramtypes', [ShoppingListService, ToastsManager, ViewContainerRef])
    ], ShoppingListAddComponent);
    return ShoppingListAddComponent;
}());
//# sourceMappingURL=D:/Dropbox/Programming/Angular/recipe-book/src/app/shopping-list/shopping-list-add.component.js.map