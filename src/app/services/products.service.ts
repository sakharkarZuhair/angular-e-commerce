import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ProductTypes } from '../../lib/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartData = new EventEmitter<ProductTypes[] | []>();

  // subTotal = new EventEmitter<ProductTypes | undefined>();

  constructor(private http: HttpClient) {}

  productsList() {
    return this.http.get<any>('http://localhost:3000/products');
  }

  getProductById(category: string, id: string) {
    return this.http.get<ProductTypes>(
      `http://localhost:3000/${category}/${id}`
    );
  }

  addProductToCart(data: ProductTypes) {
    let cartData: ProductTypes[] = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }

  removeItemFromCart(id: number | string) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: ProductTypes[] = JSON.parse(cartData);
      items = items.filter((item: ProductTypes) => id != item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
}
