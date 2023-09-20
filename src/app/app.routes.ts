import { Routes } from '@angular/router';
import { DashboardRoutes } from './shared/models';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: DashboardRoutes.Dashboard,
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: DashboardRoutes.Products,
        loadComponent: () => import('./modules/products/products.component').then((c) => c.ProductsComponent)
    },
    {
        path: DashboardRoutes.Media,
        loadComponent: () => import('./modules/media/media.component').then((c) => c.MediaComponent)
    },
    {
        path: DashboardRoutes.Customers,
        loadComponent: () => import('./modules/customers/customers.component').then((c) => c.CustomersComponent)
    },
    {
        path: DashboardRoutes.Orders,
        loadComponent: () => import('./modules/orders/orders.component').then((c) => c.OrdersComponent)
    },
];
