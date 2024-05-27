import { Component, computed, signal } from '@angular/core';
import { Item } from '../../item';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() listaDeItens: Item[] = [];
  signalItens = signal(this.listaDeItens.filter((item) => item.quantity > 0));

  subtotal = computed(() => {
    return this.signalItens().reduce(
      (acc: number, item: Item) => acc + item.price * item.quantity,
      0
    );
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listaDeItens']) {
      this.signalItens.set(
        this.listaDeItens.filter((item) => item.quantity > 0)
      );
    }
  }

  removeItem(item: Item) {
    this.listaDeItens = this.listaDeItens.map((i) => {
      if (i.id === item.id) {
        i.quantity = 0;
      }
      return i;
    });
    this.signalItens.set(this.listaDeItens.filter((item) => item.quantity > 0));
  }
}
