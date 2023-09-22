import { Routes } from '@angular/router';
import { DashboardRoutes } from 'src/app/models';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: DashboardRoutes.Dashboard,
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
        title: 'DashBoard'
    },
    {
        path: DashboardRoutes.Products,
        loadComponent: () => import('./modules/products/products.component').then((c) => c.ProductsComponent),
        title: 'Products'
    },
    {
        path: DashboardRoutes.Media,
        loadComponent: () => import('./modules/media/media.component').then((c) => c.MediaComponent),
        title: 'Media'
    },
    {
        path: DashboardRoutes.Customers,
        loadComponent: () => import('./modules/customers/customers.component').then((c) => c.CustomersComponent),
        title: 'Customers'
    },
    {
        path: DashboardRoutes.Orders,
        loadComponent: () => import('./modules/orders/orders.component').then((c) => c.OrdersComponent),
        title: 'Orders'
    },
];
