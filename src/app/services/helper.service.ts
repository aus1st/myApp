import { Injectable } from '@angular/core';
import { Book } from 'src/models/Book';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  cart: Book[] = []


  addToCard(book: Book) {
    this.cart.push(book);
  }

  getCartItems() {
    return this.cart;
  }


  removeFromCart(book: Book) {
    this.cart = this.cart.filter(b => b !== book);
  }

}
