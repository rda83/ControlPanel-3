import { Routes } from '@angular/router';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { LoginComponent } from './core/auth/login/login.component';


export interface RouteInfo {
    path: string;
    title?: string;
    icon?: string;
    children?: {[key: string]: RouteInfo};
    isProtected?: boolean;
  }
  
  export const ROUTER_TOKENS: {[key: string]: RouteInfo} = {
    CALCULATION_SYSTEMS:{
        path: 'calculation-systems',
        title: 'Расчеты',
        children: {
            CALC_HEALT_CHECK: {
                path: 'healt-checks',
                title: 'Состояния систем'
            },
            CALC_REGISTER: {
                path: 'register',
                title: 'Добавление системы'
            },
            CALC_SETTINGS: {
                path: 'settings',
                title: 'Настройки'
            }
        }
    },
    CATALOGS: {
        path: 'catalogs',
        title: 'Справочники',
        children: {
            CAT_CITIES:{
                path: 'cities',
                title: 'Города'
            },
            CAT_DEPARTMENTS:{
                path: 'departments',
                title: 'Подразделения'
            },
            CAT_EMPLOYEES:{
                path: 'employees',
                title: 'Сотрудники'
            },
            CAT_FEDERAL_DISTRICTS:{
                path: 'federal-districts',
                title: 'Федеральные округа'
            },
            CAT_PRODUCTS:{
                path: 'products',
                title: 'Товары'
            },
            CAT_REGIONS:{
                path: 'regions',
                title: 'Регионы'
            }
        }
    },
    DASHBOARDS: {
        path: 'dashboards',
        title: 'Мониторинг',
        children: {
            DASH_CALCULATION_STATS:{
                path: 'calculation-stats',
                title: 'Статистика расчетов'
            },
            DASH_GENERAL:{
                path: 'general',
                title: 'Общи монитор'
            },
            DASH_INTEGRATIONS:{
                path: 'integrations',
                title: 'Интеграции'
            },
            DASH_TRANSACTIONS:{
                path: 'transactions',
                title: 'Транзакции'
            }
        }
    },
    INTEGRATIONS: {
        path: 'integrations',
        title: 'Интеграции',
        children: {
            INTG_CITIES:{
                path: 'cities',
                title: 'Загрузка справочника городов'
            },
            INTG_FEDERAL_DISTRICTS:{
                path: 'federal-districts',
                title: 'Загрузка справочника федеральных округов'
            },
            INTG_PRODUCTS:{
                path: 'products',
                title: 'Загрузка справочника товаров'
            },
            INTG_REGIONS:{
                path: 'regions',
                title: 'Загрузка справочника регионов'
            }
        }
    },
    JOB_LOGS: {
        path: 'job-logs',
        title: 'Журналы фоновых задач',
        children: {
            JL_SCHEDULED_OPERATIONS: {
                path: 'scheduled-operations',
                title: 'Журнал регламентных операций'
            },
            JL_INTEGRATIONS: {
                path: 'integrations',
                title: 'Журнал интеграций'
            },
            JL_REPORTS: {
                path: 'reports',
                title: 'Журнал формирования отчетов'
            }
        }
    },
    REPORTS: {
        path: 'reports',
        title: 'Отчеты',
        children: {
            REPORT_PROCUREMENT: {
                path: 'procurement',
                title: 'Отчет о закупках'
            },
            REPORT_RESOURCES_SUMMARY: {
                path: 'resources-summary',
                title: 'Отчет о ресурсах'
            },
            REPORT_SALES: {
                path: 'sales',
                title: 'Отчет о продажах'
            }
        }
    },
    SCHEDULED_OPERATIONS: {
        path: 'scheduled-operations',
        title: 'Регламентные операции',
        children: {
            SCHED_EDITOR: {
                path: 'editor',
                title: 'Редактор регламентных операций'
            },
            SCHED_IMPORT_EXPORT: {
                path: 'import-export',
                title: ' Инструмент импорта/экспорта регламентных операций'
            },
            SCHED_MONITOR: {
                path: 'monitor',
                title: 'Монитор регламентных операций'
            }
        }
    },
    PROCESSING: {
        path: 'processing',
        title: 'Обработка данных',
        children: {
            PROC_CALC_RESERVE_STOCK: {
                path: 'calc-reserve-stock',
                title: 'Расчет резервов',
            },
            PROC_CALCULATIONS_PARAMS: {
                path: 'calculation-params',
                title: 'Расчет параметров калькуляции',
            },
            PROC_SCORING: {
                path: 'scoring',
                title: 'Общий расчет',
            }
        }
    }
  } as const;

export const routes: Routes = [
    { path: '', component: WeatherForecastComponent },
    // { path: '', component: EditContactComponent },
    
    { path: 'login', component: LoginComponent },

    { path: ROUTER_TOKENS["CALCULATION_SYSTEMS"].path, loadChildren: () => 
        import('./features/calculation-systems/calculation-systems.routes').then(m => m.CALCULATION_SYSTEMS_ROUTES) },

    { path: ROUTER_TOKENS["CATALOGS"].path, loadChildren: () => 
        import('./features/catalogs/catalogs.routes').then(m => m.CATALOGS_ROUTES) },

    { path: ROUTER_TOKENS["DASHBOARDS"].path, loadChildren: () => 
        import('./features/dashboards/dashboards.routes').then(m => m.DASHBOARDS_ROUTES) },

    { path: ROUTER_TOKENS["INTEGRATIONS"].path, loadChildren: () => 
        import('./features/integrations/integrations.routes').then(m => m.INTEGRATIONS_ROUTES) },

    { path: ROUTER_TOKENS["JOB_LOGS"].path, loadChildren: () => 
        import('./features/job-logs/job-logs.routes').then(m => m.JOB_LOGS_ROUTES) },

    { path: ROUTER_TOKENS["REPORTS"].path, loadChildren: () => 
        import('./features/reports/reports.routes').then(m => m.REPORTS_ROUTES) },

    { path: ROUTER_TOKENS["SCHEDULED_OPERATIONS"].path, loadChildren: () => 
        import('./features/scheduled-operations/scheduled-operations.routes').then(m => m.SCHEDULED_OPERATIONS_ROUTES) },

    { path: ROUTER_TOKENS["PROCESSING"].path, loadChildren: () => 
        import('./features/processing/processing.routes').then(m => m.PROCESSING_ROUTES) }
];
