import { Routes } from '@angular/router';
import { CalcHealtChecksComponent } from './calc-healt-checks/calc-healt-checks.component';
import { CalcRegisterComponent } from './calc-register/calc-register.component';
import { CalcSettingsComponent } from './calc-settings/calc-settings.component';
import { ROUTER_TOKENS } from '../../app.routes';

export const CALCULATION_SYSTEMS_ROUTES: Routes = [
    { path: ROUTER_TOKENS["CALCULATION_SYSTEMS"].children!["CALC_HEALT_CHECK"].path, component: CalcHealtChecksComponent },
    { path: ROUTER_TOKENS["CALCULATION_SYSTEMS"].children!["CALC_REGISTER"].path, component: CalcRegisterComponent },
    { path: ROUTER_TOKENS["CALCULATION_SYSTEMS"].children!["CALC_SETTINGS"].path, component: CalcSettingsComponent }
  ];