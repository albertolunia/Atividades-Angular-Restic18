import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../item';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item: any;
  @Output() removeFromCartEvent = new EventEmitter<Item>();

  removeItem() {
    this.item.quantity = 0;
    this.removeFromCartEvent.emit(this.item);
  }
}
