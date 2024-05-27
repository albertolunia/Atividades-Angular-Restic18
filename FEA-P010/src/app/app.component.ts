import { Component, signal } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P010';
  showCart = false;

  itens: Item[] = [
    {
      id: 1,
      name: 'Livro de computação 1',
      price: 15,
      quantity: 0,
      imgURL:
        'https://m.media-amazon.com/images/I/81qgu5-zXXL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 2,
      name: 'Livro de computação 2',
      price: 20,
      quantity: 0,
      imgURL:
        'https://a-static.mlcdn.com.br/450x450/livro-teoria-da-computacao/livrariamartinsfontespaulista/1051620/c005ff08dee594fa1b83824f92938817.jpg',
    },
    {
      id: 3,
      name: 'Livro de computação 3',
      price: 25,
      quantity: 0,
      imgURL:
        'https://livrariaflorence.fbitsstatic.net/img/p/livro-introducao-a-computacao-hardware-software-e-dados-carvalho-lorena-147281/333681-1.jpg',
    },
    {
      id: 4,
      name: 'Livro de computação 4',
      price: 30,
      quantity: 0,
      imgURL:
        'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9786586057553.jpg',
    },
  ];

  signalItens = signal(this.itens);

  onAddToCart(item: Item) {
    // mudar a lista para que o ngChanges seja chamado
    const newItens = this.itens.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          quantity: i.quantity + item.quantity,
        };
      }
      return i;
    });

    this.itens = newItens;
    this.signalItens.set(this.itens);
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
