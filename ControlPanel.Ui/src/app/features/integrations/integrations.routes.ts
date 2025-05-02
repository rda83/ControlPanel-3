import { Routes } from '@angular/router';
import { IntgCitiesComponent } from './intg-cities/intg-cities.component';
import { IntgFederalDistrictsComponent } from './intg-federal-districts/intg-federal-districts.component';
import { IntgProductsComponent } from './intg-products/intg-products.component';
import { IntgRegionsComponent } from './intg-regions/intg-regions.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const INTEGRATIONS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["INTEGRATIONS"].children!["INTG_CITIES"].path, component: IntgCitiesComponent },
    { path: ROUTER_TOKENS["INTEGRATIONS"].children!["INTG_FEDERAL_DISTRICTS"].path, component: IntgFederalDistrictsComponent },
    { path: ROUTER_TOKENS["INTEGRATIONS"].children!["INTG_PRODUCTS"].path, component: IntgProductsComponent },
    { path: ROUTER_TOKENS["INTEGRATIONS"].children!["INTG_REGIONS"].path, component: IntgRegionsComponent }
  ];