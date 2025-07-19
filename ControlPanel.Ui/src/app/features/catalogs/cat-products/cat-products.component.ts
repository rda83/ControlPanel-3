import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from './models/product';
import {  
  ClrDatagridModule, 
  ClrDatagridStateInterface, 
  ClrFormsModule, 
  ClrIconModule,
  ClrRadioModule} from '@clr/angular';
import { CommonModule } from '@angular/common';
import { ProductsService } from './cat-products.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ListRange } from '@angular/cdk/collections';

// Check list
//   - Virtual scroll (подгрузка через API)
//   - Возможность сортировки (в заголовках), фильтрации на стороне сервера, с обновлением списка.
//   - Детальная информация для строки
//   - Фильтры в заголовках
//   - Корректное отображение типов данных
//   - *Выделение строк
//   - *Экспорт
//   - *Кастомная стилизация
//   - *переключение режимов [class.datagrid-compact]="rowSize === 'compact'"
//   - *включение отключение колонок
//   - *Actions для строк
//   - *Datagrid Detail Pane
// Вопросы
//   - private cdr: ChangeDetectorRef, this.cdr.detectChanges(), this.subscribe
//   - state?: ClrDatagridStateInterface
//   - $event: ListRange
//   - ng-template
//   - BehaviorSubject<Product[]>(this.all)

@Component({
  standalone: true,
  selector: 'app-cat-products',
  providers: [ProductsService],
  imports: [CommonModule, FormsModule, ClrDatagridModule, ClrIconModule, ClrRadioModule, ClrFormsModule],
  templateUrl: './cat-products.component.html',
  styleUrl: './cat-products.component.css'
})
export class CatProductsComponent implements  OnInit, OnDestroy {
  loading = false;
  loadingMoreItems = false;
  currentPageSize = 100;
  
  products: Observable<Product[]>;
  private subscribe: Subscription | undefined;
  

  constructor(public productsService: ProductsService, private cdr: ChangeDetectorRef) {
    
    this.productsService.size = this.currentPageSize * 3;
    this.productsService.lazyLoadProducts(this.productsService.size);
    this.products = this.productsService.getAllProductsSubject().asObservable();
  }

  refresh(state?: ClrDatagridStateInterface) {
    this.loading = true;
    this.productsService.all = [];
    this.productsService.size = this.currentPageSize * 3;
    this.productsService.lazyLoadProducts(this.productsService.size);
    this.loading = false;
    this.cdr.detectChanges();
  }

  renderRangeChange($event: ListRange) { this.loadMore($event); }

  loadMore($event: ListRange) {
 
    if (this.loadingMoreItems 
      || $event.end + this.currentPageSize < this.productsService.size - this.currentPageSize / 2) {
        return;
    }

    this.loadingMoreItems = true;
    this.productsService.size += this.currentPageSize;
    this.productsService.lazyLoadProducts(this.currentPageSize);
    this.loadingMoreItems = false;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.subscribe = this.products.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void { this.subscribe?.unsubscribe(); }
}
