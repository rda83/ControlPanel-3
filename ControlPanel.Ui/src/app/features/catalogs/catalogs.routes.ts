import { Routes } from '@angular/router';
import { CatCitiesComponent } from './cat-cities/cat-cities.component';
import { CatDepartmentsComponent } from './cat-departments/cat-departments.component';
import { CatEmployeesComponent } from './cat-employees/cat-employees.component';
import { CatFederalDistrictsComponent } from './cat-federal-districts/cat-federal-districts.component';
import { CatProductsComponent } from './cat-products/cat-products.component';
import { CatRegionsComponent } from './cat-regions/cat-regions.component';

export const CATALOGS_ROUTES: Routes = [
    { path: 'cities', component:  CatCitiesComponent },
    { path: 'departments', component:  CatDepartmentsComponent },
    { path: 'employees', component:  CatEmployeesComponent },
    { path: 'federal-districts', component:  CatFederalDistrictsComponent },
    { path: 'products', component: CatProductsComponent },
    { path: 'regions', component: CatRegionsComponent }
  ];