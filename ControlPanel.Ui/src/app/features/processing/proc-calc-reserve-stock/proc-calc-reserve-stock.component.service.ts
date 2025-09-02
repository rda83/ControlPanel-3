import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Product } from "../../catalogs/cat-products/models/product";

@Injectable()
export class CalcReserveStockService {



    private productUrl = 'http://localhost:5232/api/Product';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl)
        .pipe(
            tap(() => console.log('In http.get pipeline 1')),
        );
    }

    
}