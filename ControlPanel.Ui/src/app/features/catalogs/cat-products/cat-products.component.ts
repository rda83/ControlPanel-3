import { Component } from '@angular/core';
import { Product } from './models/product';
import { ClrDatagridModule, ClrIconModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { ProductsService } from './cat-products.service';

@Component({
  standalone: true,
  selector: 'app-cat-products',
  providers: [ProductsService],
  imports: [CommonModule, ClrDatagridModule, ClrIconModule],
  templateUrl: './cat-products.component.html',
  styleUrl: './cat-products.component.css'
})
export class CatProductsComponent {
  
  products: Product[];

  constructor(public productsService: ProductsService)
  {
    this.productsService.size = 100;
    this.productsService.reset();
    this.products = this.productsService.all;
  }
}
