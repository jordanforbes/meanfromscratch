import { Component } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../../Item';

@Component({
	moduleId: module.id,
 	selector: 'items',
 	templateUrl: 'items.component.html'
})

export class ItemsComponent {
	items: Item[];
	title: string;

	constructor(private itemService:ItemService){
		this.itemService.getItems()
			.subscribe(items => {
					this.items = items;
				});
	}

	addItem(event){
		event.preventDefault();
			var newItem = {
				title: this.title,
				isDone: false
			}

			this.itemService.addItem(newItem)
				.subscribe(item => {
						this.items.push(item);
						this.title = '';
					});
	}

	deleteItem(id){
		var items = this.items;

		this.itemService.deleteItem(id).subscribe(data => {
				if(data.n == 1){
					for(var i = 0; i < items.length; i++){
						if(items[i]._id == id){
							items.splice(i, 1);

						}
					}
				}
			})
	}

	updateStatus(item){
		var _item = {
			_id:item._id,
			title: item.title,
			isDone: !item.isDone
		};

		this.itemService.updateStatus(item).subscribe(data => {
			item.isDone = !item.isDone;
			});
	}
}