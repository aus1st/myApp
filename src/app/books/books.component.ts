import { Component } from '@angular/core';
import { Book } from 'src/models/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {

  cart: Book[] = [];

  books: Book[] = [
    {
      name: 'Engineers Survival',
      imgUrl: 'https://m.media-amazon.com/images/I/41lkYRqFsUL._SX331_BO1,204,203,200_.jpg',
      author: 'Merih Taze',
      price: 500
    },
    {
      name: 'Computer Programming for Beginners',
      imgUrl: 'https://m.media-amazon.com/images/I/41nVx8EmeQS._SX331_BO1,204,203,200_.jpg',
      author: 'Nathan Clark',
      price: 500
    },
    {
      name: "A Programmer's Guide to Computer Science",
      imgUrl: 'https://m.media-amazon.com/images/I/415Cpbap9aL._SX331_BO1,204,203,200_.jpg',
      author: ' Dr. William M Springer II',
      price: 600
    },
    {
      name: "Excel Formulas & Functions For Dummies",
      imgUrl: 'https://m.media-amazon.com/images/I/51u0bvlVNYL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      author: 'Ken Bluttman',
      price: 400
    },
  ]

  isDisabled: boolean = false;
  isShowing: boolean = true;

  constructor() { }

  // inputText = '';

  // handleClick() {
  //   this.isDisabled = true;
  // }

  addToCartListner(event: Book) {
    console.log('printing from parent: ', event);
  }


}

