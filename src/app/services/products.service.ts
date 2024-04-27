import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductTypes } from '../../lib/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  productsList() {
    return this.http.get<any>('http://localhost:3000/products');
  }
}
