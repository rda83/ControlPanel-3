import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../catalogs/cat-products/models/product';
import { CalcReserveStockService } from './proc-calc-reserve-stock.component.service';
import { catchError, EMPTY, shareReplay, Subscription, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-proc-calc-reserve-stock',
  providers: [CalcReserveStockService],
  imports: [CommonModule],
  templateUrl: './proc-calc-reserve-stock.component.html',
  styleUrl: './proc-calc-reserve-stock.component.css'
})
export class ProcCalcReserveStockComponent {

  private calcReserveStock = inject(CalcReserveStockService);

  readonly products$ = this.calcReserveStock.products$.pipe(
        tap(() => console.log('In http.get pipeline 2')),
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        }),
      );

  errorMessage = "";
  
}
