import { Routes } from '@angular/router';
import { SchedEditorComponent } from './sched-editor/sched-editor.component';
import { SchedImportExportComponent } from './sched-import-export/sched-import-export.component';
import { SchedMonitorComponent } from './sched-monitor/sched-monitor.component';

export const SCHEDULED_OPERATIONS_ROUTES: Routes = [
    { path: 'editor', component: SchedEditorComponent },
    { path: 'import-export', component: SchedImportExportComponent },
    { path: 'monitor', component: SchedMonitorComponent }
  ];