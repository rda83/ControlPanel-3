import { Routes } from '@angular/router';
import { CalcHealtChecksComponent } from './calc-healt-checks/calc-healt-checks.component';
import { CalcRegisterComponent } from './calc-register/calc-register.component';
import { CalcSettingsComponent } from './calc-settings/calc-settings.component';

export const CALCULATION_SYSTEMS_ROUTES: Routes = [
    { path: 'healt-checks', component: CalcHealtChecksComponent },
    { path: 'register', component: CalcRegisterComponent },
    { path: 'settings', component: CalcSettingsComponent }
  ];