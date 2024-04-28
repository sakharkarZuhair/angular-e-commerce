import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CartCardComponent } from '../cart/cart-card/cart-card.component';

import { RouterLink, RouterOutlet } from '@angular/router';

import { navLinks } from '../../lib/nav-link';
import { NavLinks, ProductTypes } from '../../lib/types';
import { ProductsService } from '../../app/services/products.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    CartCardComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  cartItems = 0;
  cartProducts: ProductTypes[] = [];
  subTotal: any = 0;
  tax = 500;
  gst = 600;
  removeCart = false;

  navbarLinks: NavLinks[] = navLinks;

  sidebarVisible: boolean = false;

  items: MenuItem[] | undefined;

  constructor(private product: ProductsService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Account',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Cart',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
    ];

    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }

    if (cartData) {
      this.cartProducts = JSON.parse(cartData);
      JSON.parse(cartData).reduce((acc: any, obj: ProductTypes) => {
        return (this.subTotal = acc + obj.price.discounted_price) ;
      }, 0);
    }

    this.product.cartData.subscribe((carts) => {
      this.cartProducts = carts;
      carts.reduce((acc: any, obj: ProductTypes) => {
        return (this.subTotal = acc + obj.price.discounted_price );
      }, 0);
    });

    this.product.cartData.subscribe((carts) => {
      this.cartItems = carts.length;
    });
    console.log('WHAT IS HAPPENING', this.cartProducts);
  }

  removeCartHandler(id: number | string) {
    this.product.removeItemFromCart(id);
    this.removeCart = false;
  }
}
