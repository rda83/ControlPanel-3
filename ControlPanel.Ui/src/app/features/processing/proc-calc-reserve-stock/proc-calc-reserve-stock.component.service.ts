import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, of, shareReplay, tap } from "rxjs";
import { Product } from "../../catalogs/cat-products/models/product";

@Injectable()
export class CalcReserveStockService {

    private http = inject(HttpClient);
    private productUrl = 'http://localhost:5232/api/Product';

    private productSelectedSubject = new BehaviorSubject<number | undefined>(undefined);
    readonly productSelected$ = this.productSelectedSubject.asObservable();

    productSelected(selectedProductId: number): void {
        this.productSelectedSubject.next(selectedProductId);
    }

    readonly products$ = this.http.get<Product[]>(this.productUrl)
        .pipe(
            tap(() => console.log('In http.get pipeline 1')),
            shareReplay(1),
            catchError(err => {
                throw "ERROR";
            }),
        );
}