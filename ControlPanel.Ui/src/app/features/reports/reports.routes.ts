import { Routes } from '@angular/router';
import { ReportProcurementComponent } from './report-procurement/report-procurement.component';
import { ReportResourcesSummaryComponent } from './report-resources-summary/report-resources-summary.component';
import { ReportSalesComponent } from './report-sales/report-sales.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const REPORTS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["REPORTS"].children!["REPORT_PROCUREMENT"].path, component: ReportProcurementComponent },
    { path: ROUTER_TOKENS["REPORTS"].children!["REPORT_RESOURCES_SUMMARY"].path, component: ReportResourcesSummaryComponent },
    { path: ROUTER_TOKENS["REPORTS"].children!["REPORT_SALES"].path, component: ReportSalesComponent }
  ];