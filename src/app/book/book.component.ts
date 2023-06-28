import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Output() bookEmitter = new EventEmitter<Book>();

  @Input()
  book: Book = {} as Book


  addToCart() {
    //console.log(this.book)
    this.bookEmitter.emit(this.book);
  }

}
