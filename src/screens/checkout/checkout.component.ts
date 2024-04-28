import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProductTypes } from '../../lib/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cartProducts: ProductTypes[] = [];
  subTotal: any = 0;
  tax = 500;
  gst = 600;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartProducts = JSON.parse(cartData);
      JSON.parse(cartData).reduce((acc: any, obj: ProductTypes) => {
        return (this.subTotal = acc + obj.price.discounted_price);
      }, 0);
    }
  }

  orderNow(data: any) {
    let email = data.email;
    let firstName = data.firstName;
    let lastName = data?.lastName;
    let address = data?.address;

    localStorage.setItem('email', email);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('address', address);
    localStorage.removeItem('localCart');

    setTimeout(() => {
      localStorage.removeItem('email');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('address');
      localStorage.removeItem('localCart');
    }, 3000);

    this.router.navigate(['/congratulations']);
  }
}
