import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { BookService } from './book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

  cart: Book[] = [];

  books: Book[] = [];

  isDisabled: boolean = false;
  isShowing: boolean = true;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addToCartListner(event: Book) {
    console.log('printing from parent: ', event);
  }


}

