import { Injectable } from "@angular/core";


import PRODUCTS_ITEMS from './products-items.json';
import { Product } from "./models/product";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProductsService {

    size = 100;

    private _all: Product[] = [];
    private _currentQuery: Product[] | undefined;
    private allVirtualScrollProducts = new BehaviorSubject<Product[]>(this.all);

    get all(): Product[] {
        return this._all;
    }

    reset(useInventory: boolean = true) {
        if (useInventory) {
            
            this._all = PRODUCTS_ITEMS.slice(0, this.size).map((item: any) => ({
                ...item,
                createdAt: new Date(item.createdAt),
                updatedAt: item.updatedAt ? new Date(item.updatedAt) : null
            }));            
        } else {
            // this._all = [];
            // this._all = this._all.concat(this.createUsers());
        }
    }
}