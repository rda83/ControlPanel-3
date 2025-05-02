import { Routes } from '@angular/router';
import { ProcCalcReserveStockComponent } from './proc-calc-reserve-stock/proc-calc-reserve-stock.component';
import { ProcCalculationParamsComponent } from './proc-calculation-params/proc-calculation-params.component';
import { ProcScoringComponent } from './proc-scoring/proc-scoring.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const PROCESSING_ROUTES: Routes = [
    { path: ROUTER_TOKENS["PROCESSING"].children!["PROC_CALC_RESERVE_STOCK"].path, component: ProcCalcReserveStockComponent },
    { path: ROUTER_TOKENS["PROCESSING"].children!["PROC_CALCULATIONS_PARAMS"].path, component: ProcCalculationParamsComponent },
    { path: ROUTER_TOKENS["PROCESSING"].children!["PROC_SCORING"].path, component: ProcScoringComponent }
  ];