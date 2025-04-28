import { Routes } from '@angular/router';
import { ReportProcurementComponent } from './report-procurement/report-procurement.component';
import { ReportResourcesSummaryComponent } from './report-resources-summary/report-resources-summary.component';
import { ReportSalesComponent } from './report-sales/report-sales.component';

export const REPORTS_ROUTES: Routes = [
    { path: 'procurement', component: ReportProcurementComponent },
    { path: 'resources-summary', component: ReportResourcesSummaryComponent },
    { path: 'sales', component: ReportSalesComponent }
  ];