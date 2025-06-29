import { Routes } from '@angular/router';
import { DashCalculationStatsComponent } from './dash-calculation-stats/dash-calculation-stats.component';
import { DashGeneralComponent } from './dash-general/dash-general.component';
import { DashIntegrationsComponent } from './dash-integrations/dash-integrations.component';
import { DashTransactionsComponent } from './dash-transactions/dash-transactions.component';
import { ROUTER_TOKENS } from '../../app.routes';
import { AuthGuard } from '../../core/guards/auth.guard';

export const DASHBOARDS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["DASHBOARDS"].children!["DASH_CALCULATION_STATS"].path, component: DashCalculationStatsComponent, canActivate: [AuthGuard]},
    { path: ROUTER_TOKENS["DASHBOARDS"].children!["DASH_GENERAL"].path, component:  DashGeneralComponent, canActivate: [AuthGuard]},
    { path: ROUTER_TOKENS["DASHBOARDS"].children!["DASH_INTEGRATIONS"].path, component:  DashIntegrationsComponent, canActivate: [AuthGuard]},
    { path: ROUTER_TOKENS["DASHBOARDS"].children!["DASH_TRANSACTIONS"].path, component:  DashTransactionsComponent, canActivate: [AuthGuard]}
  ];