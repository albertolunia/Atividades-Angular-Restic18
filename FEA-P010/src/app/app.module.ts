import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { ItensListComponent } from './components/itens-list/itens-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    ListItemComponent,
    ItensListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
