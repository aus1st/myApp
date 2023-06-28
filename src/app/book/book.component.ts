import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/models/Book';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private helperSer: HelperService) { }

  @Output() bookEmitter = new EventEmitter<Book>();

  @Input()
  book: Book = {} as Book
  isInCart: boolean = false;

  addToCart() {
    //console.log(this.book)
    this.isInCart = true;
    this.helperSer.addToCard(this.book)
    //this.bookEmitter.emit(this.book);
  }

  removeItem() {
    this.isInCart = false;
    this.helperSer.removeFromCart(this.book)
  }

}
