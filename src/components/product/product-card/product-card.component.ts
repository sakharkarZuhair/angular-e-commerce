import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CardModule, RouterLink, RouterOutlet],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  @Input() disCounted_price: number = 0;
  @Input() id: string = '';
  @Input() isSale: boolean | undefined = false;
}
