import { Routes } from '@angular/router';
import { SchedEditorComponent } from './sched-editor/sched-editor.component';
import { SchedImportExportComponent } from './sched-import-export/sched-import-export.component';
import { SchedMonitorComponent } from './sched-monitor/sched-monitor.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const SCHEDULED_OPERATIONS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["SCHEDULED_OPERATIONS"].children!["SCHED_EDITOR"].path, component: SchedEditorComponent },
    { path: ROUTER_TOKENS["SCHEDULED_OPERATIONS"].children!["SCHED_IMPORT_EXPORT"].path, component: SchedImportExportComponent },
    { path: ROUTER_TOKENS["SCHEDULED_OPERATIONS"].children!["SCHED_MONITOR"].path, component: SchedMonitorComponent }
  ];