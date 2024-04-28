import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../app/services/products.service';
import { ProductTypes } from '../../lib/types';
import { ProductCardComponent } from '../../components/product/product-card/product-card.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  tshirts: undefined | ProductTypes[];
  mugs: undefined | ProductTypes[];
  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products.productsList().subscribe((result) => {
      console.log(result);
      this.tshirts = result.tshirts;
      this.mugs = result.mugs;
    });
  }
}
