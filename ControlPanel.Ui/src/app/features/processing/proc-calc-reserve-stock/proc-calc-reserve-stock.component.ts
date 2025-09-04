import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../catalogs/cat-products/models/product';
import { CalcReserveStockService } from './proc-calc-reserve-stock.component.service';
import { catchError, EMPTY, Subscription, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-proc-calc-reserve-stock',
  providers: [CalcReserveStockService],
  imports: [CommonModule],
  templateUrl: './proc-calc-reserve-stock.component.html',
  styleUrl: './proc-calc-reserve-stock.component.css'
})
export class ProcCalcReserveStockComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  products: Product[] = [];
  
  errorMessage = "";
  

  constructor(public calcReserveStock: CalcReserveStockService) { }

  ngOnInit(): void {
    
    this.sub = this.calcReserveStock.getProducts()
      .pipe(
        tap(() => console.log('In http.get pipeline 2')),
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        }),
      )
      .subscribe(products => this.products = products);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
