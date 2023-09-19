import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./modules/products/products.component').then((c) => c.ProductsComponent)
    },
    {
        path: 'media',
        loadComponent: () => import('./modules/media/media.component').then((c) => c.MediaComponent)
    },
    {
        path: 'customers',
        loadComponent: () => import('./modules/customers/customers.component').then((c) => c.CustomersComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('./modules/orders/orders.component').then((c) => c.OrdersComponent)
    },
];
