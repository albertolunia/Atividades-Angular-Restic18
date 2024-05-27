import { Component, Input, Output } from '@angular/core';
import { Item } from '../../item';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() item: Item = {} as Item;
  quantity = 0;
  @Output() addItemEvent = new EventEmitter<Item>();

  addToCart() {
    const itemModified = { ...this.item, quantity: this.quantity };
    this.addItemEvent.emit(itemModified);
    console.log('Item added to cart');
  }
}
