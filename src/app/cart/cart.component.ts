import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {

  }

  getCart() {
    return this.helperService.getCartItems();
  }


}
