import { Routes } from '@angular/router';
import { JlScheduledOperationsComponent } from './jl-scheduled-operations/jl-scheduled-operations.component';
import { JlIntegrationsComponent } from './jl-integrations/jl-integrations.component';
import { JlReportsComponent } from './jl-reports/jl-reports.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const JOB_LOGS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["JOB_LOGS"].children!["JL_SCHEDULED_OPERATIONS"].path, component: JlScheduledOperationsComponent },
    { path: ROUTER_TOKENS["JOB_LOGS"].children!["JL_INTEGRATIONS"].path, component: JlIntegrationsComponent },
    { path: ROUTER_TOKENS["JOB_LOGS"].children!["JL_REPORTS"].path, component: JlReportsComponent }
  ];