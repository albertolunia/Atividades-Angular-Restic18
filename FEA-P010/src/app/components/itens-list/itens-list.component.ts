import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrl: './itens-list.component.css',
})
export class ItensListComponent {
  @Input() itens: Item[] = [];
  @Output() addToCartEvent = new EventEmitter<Item>();

  addToCart(item: Item) {
    this.addToCartEvent.emit(item);
    console.log('Item added to cart');
  }
}
