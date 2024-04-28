import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../app/services/products.service';
import { ProductTypes } from '../../lib/types';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconFieldModule, ButtonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | ProductTypes;
  productQuantity: number = 1;

  removeCart = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductsService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    let category = this.activeRoute.snapshot.paramMap.get('category');

    category &&
      productId &&
      this.product.getProductById(category, productId).subscribe((result) => {
        this.productData = result;

        let cardData = localStorage.getItem('localCart');
        if (productId && cardData) {
          let items = JSON.parse(cardData);
          let currentProduct;
          items = items.filter((item: ProductTypes) => productId == item.id);
          if (items.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
          currentProduct = items.filter(
            (item: ProductTypes) => productId == item.id
          );
          if (currentProduct[0].quantity) {
            this.productQuantity = currentProduct[0].quantity;
          } else {
            this.productQuantity = 1;
          }
        }
      });
  }

  handleQuantity(val: string) {
    if (this.productData?.stock !== 0) {
      if (this.productQuantity < 20 && val === 'plus') {
        this.productQuantity += 1;
      } else if (this.productQuantity > 1 && val === 'min') {
        this.productQuantity -= 1;
      }
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;

      this.product.addProductToCart(this.productData);
      this.removeCart = true;
    }
  }

  removeCartHandler(id: number | string) {
    this.product.removeItemFromCart(id);
    this.removeCart = false;
  }
}
