import { Routes } from '@angular/router';
import { IntgCitiesComponent } from './intg-cities/intg-cities.component';
import { IntgFederalDistrictsComponent } from './intg-federal-districts/intg-federal-districts.component';
import { IntgProductsComponent } from './intg-products/intg-products.component';
import { IntgRegionsComponent } from './intg-regions/intg-regions.component';

export const INTEGRATIONS_ROUTES: Routes = [
    { path: 'cities', component: IntgCitiesComponent },
    { path: 'federal-districts', component: IntgFederalDistrictsComponent },
    { path: 'products', component: IntgProductsComponent },
    { path: 'regions', component: IntgRegionsComponent }
  ];