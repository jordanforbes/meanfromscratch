"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_service_1 = require('../../services/item.service');
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        var _this = this;
        this.itemService = itemService;
        this.itemService.getItems()
            .subscribe(function (items) {
            _this.items = items;
        });
    }
    ItemsComponent.prototype.addItem = function (event) {
        var _this = this;
        event.preventDefault();
        var newItem = {
            title: this.title,
            isDone: false
        };
        this.itemService.addItem(newItem)
            .subscribe(function (item) {
            _this.items.push(item);
            _this.title = '';
        });
    };
    ItemsComponent.prototype.deleteItem = function (id) {
        var items = this.items;
        this.itemService.deleteItem(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        });
    };
    ItemsComponent.prototype.updateStatus = function (item) {
        var _item = {
            _id: item._id,
            title: item.title,
            isDone: !item.isDone
        };
        this.itemService.updateStatus(item).subscribe(function (data) {
            item.isDone = !item.isDone;
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items',
            templateUrl: 'items.component.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map