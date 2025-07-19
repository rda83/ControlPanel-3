import { Injectable } from "@angular/core";
import { Product } from "./models/product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class ProductsService {
    
    size = 100;
    private _all: Product[] = [];
    get all(): Product[] { return this._all; }
    set all(value) { this._all = value; }

    private allVirtualScrollProducts = new BehaviorSubject<Product[]>(this.all);

    // private productUrl = '/api/Product';
    private productUrl = 'http://localhost:5232/api/Product';

    constructor(private http: HttpClient) {}

    getAllProductsSubject() { return this.allVirtualScrollProducts; }

    lazyLoadProducts(size = this.size) {
        this.getProducts(this._all.length, size).subscribe(newProducts => {
            this.all = [...this._all, ...newProducts];
            this.allVirtualScrollProducts.next(this.all);
        });
    }

    getProducts(
        skip: number,
        take: number,
        sortField?: string,
        sortOrder?: string,
        filters?: any): Observable<Product[]> {

        let params = new HttpParams().set('skip', skip.toString())
            .set('take', take.toString());

        if (sortField && sortOrder) {
            params = params
                .set('sortField', sortField)
                .set('sortOrder', sortOrder);
        }

        if (filters) {
            Object.keys(filters).forEach(key => {
            if (filters[key] !== null && filters[key] !== undefined) {
                params = params.set(key, filters[key]);
            }
            });
        }

        return this.http.get<Product[]>(this.productUrl, { params });
    }
}
