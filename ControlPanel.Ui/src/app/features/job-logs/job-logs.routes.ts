import { Routes } from '@angular/router';
import { JlScheduledOperationsComponent } from './jl-scheduled-operations/jl-scheduled-operations.component';
import { JlIntegrationsComponent } from './jl-integrations/jl-integrations.component';
import { JlReportsComponent } from './jl-reports/jl-reports.component';

export const JOB_LOGS_ROUTES: Routes = [
    { path: 'scheduled-operations', component: JlScheduledOperationsComponent },
    { path: 'integrations', component: JlIntegrationsComponent },
    { path: 'reports', component: JlReportsComponent }
  ];