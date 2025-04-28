import { Routes } from '@angular/router';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

///calculation-systems/healt-checks
///calculation-systems/register
///calculation-systems/settings

///catalogs/cities
///catalogs/departments
///catalogs/employees
///catalogs/federal-districts
///catalogs/products
///catalogs/regions

///dashboards/calculation-stats
///dashboards/general
///dashboards/integrations
///dashboards/transactions

///integrations/cities
///integrations/federal-districts
///integrations/products
///integrations/regions

///job-logs/scheduled-operations
///job-logs/integrations
///job-logs/reports

///reports/procurement
///reports/resources-summary
///reports/sales

///scheduled-operations/editor
///scheduled-operations/import-export
///scheduled-operations/monitor

///processing/calc-reserve-stock
///processing/calculation-params
///processing/scoring

export const routes: Routes = [
    { path: '', component: WeatherForecastComponent },
    { path: 'calculation-systems', loadChildren: () => 
        import('./features/calculation-systems/calculation-systems.routes').then(m => m.CALCULATION_SYSTEMS_ROUTES) },
    { path: 'catalogs', loadChildren: () => 
        import('./features/catalogs/catalogs.routes').then(m => m.CATALOGS_ROUTES) },
    { path: 'dashboards', loadChildren: () => 
        import('./features/dashboards/dashboards.routes').then(m => m.DASHBOARDS_ROUTES) },
    { path: 'integrations', loadChildren: () => 
        import('./features/integrations/integrations.routes').then(m => m.INTEGRATIONS_ROUTES) },
    { path: 'job-logs', loadChildren: () => 
        import('./features/job-logs/job-logs.routes').then(m => m.JOB_LOGS_ROUTES) },
    { path: 'reports', loadChildren: () => 
        import('./features/reports/reports.routes').then(m => m.REPORTS_ROUTES) },
    { path: 'scheduled-operations', loadChildren: () => 
        import('./features/scheduled-operations/scheduled-operations.routes').then(m => m.SCHEDULED_OPERATIONS_ROUTES) },
    { path: 'processing', loadChildren: () => 
        import('./features/processing/processing.routes').then(m => m.PROCESSING_ROUTES) }
];
