import { Routes } from '@angular/router';
import { ProcCalcReserveStockComponent } from './proc-calc-reserve-stock/proc-calc-reserve-stock.component';
import { ProcCalculationParamsComponent } from './proc-calculation-params/proc-calculation-params.component';
import { ProcScoringComponent } from './proc-scoring/proc-scoring.component';

export const PROCESSING_ROUTES: Routes = [
    { path: 'calc-reserve-stock', component: ProcCalcReserveStockComponent },
    { path: 'calculation-params', component: ProcCalculationParamsComponent },
    { path: 'scoring', component: ProcScoringComponent }
  ];