import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
