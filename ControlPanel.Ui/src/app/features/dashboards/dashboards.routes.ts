import { Routes } from '@angular/router';
import { DashCalculationStatsComponent } from './dash-calculation-stats/dash-calculation-stats.component';
import { DashGeneralComponent } from './dash-general/dash-general.component';
import { DashIntegrationsComponent } from './dash-integrations/dash-integrations.component';
import { DashTransactionsComponent } from './dash-transactions/dash-transactions.component';

export const DASHBOARDS_ROUTES: Routes = [
    { path: 'calculation-stats', component: DashCalculationStatsComponent  },
    { path: 'general', component:  DashGeneralComponent },
    { path: 'integrations', component:  DashIntegrationsComponent },
    { path: 'transactions', component:  DashTransactionsComponent }
  ];