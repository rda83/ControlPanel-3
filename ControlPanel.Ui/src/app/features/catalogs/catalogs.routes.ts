import { Routes } from '@angular/router';
import { CatCitiesComponent } from './cat-cities/cat-cities.component';
import { CatDepartmentsComponent } from './cat-departments/cat-departments.component';
import { CatEmployeesComponent } from './cat-employees/cat-employees.component';
import { CatFederalDistrictsComponent } from './cat-federal-districts/cat-federal-districts.component';
import { CatProductsComponent } from './cat-products/cat-products.component';
import { CatRegionsComponent } from './cat-regions/cat-regions.component';
import { ROUTER_TOKENS } from '../../app.routes';
import { CatCityDetailComponent } from './cat-city-detail/cat-city-detail.component';

export const CATALOGS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_CITIES"].path, component:  CatCitiesComponent },
    { path: `${ROUTER_TOKENS["CATALOGS"].children!["CAT_CITIES"].path}/:id`, component:  CatCityDetailComponent },

    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_DEPARTMENTS"].path, component:  CatDepartmentsComponent },
    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_EMPLOYEES"].path, component:  CatEmployeesComponent },
    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_FEDERAL_DISTRICTS"].path, component:  CatFederalDistrictsComponent },
    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_PRODUCTS"].path, component: CatProductsComponent },
    { path: ROUTER_TOKENS["CATALOGS"].children!["CAT_REGIONS"].path, component: CatRegionsComponent }
  ];