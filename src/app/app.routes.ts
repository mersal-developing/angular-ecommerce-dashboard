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
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
        title: 'DashBoard'
    },
    {
        path: `${DashboardRoutes.Products}/${DashboardRoutes.Create}`,
        loadComponent: () => import('./pages/products/create-product/create-product.component').then((c) => c.CreateProductComponent),
        title: 'Create-Products',
        pathMatch: 'full'
    },
    {
        path: DashboardRoutes.Products,
        loadComponent: () => import('./pages/products/products.component').then((c) => c.ProductsComponent),
        title: 'Products',
        pathMatch: 'full'

    },
    {
        path: DashboardRoutes.Media,
        loadComponent: () => import('./pages/media/media.component').then((c) => c.MediaComponent),
        title: 'Media'
    },
    {
        path: DashboardRoutes.Customers,
        loadComponent: () => import('./pages/customers/customers.component').then((c) => c.CustomersComponent),
        title: 'Customers'
    },
    {
        path: DashboardRoutes.Orders,
        loadComponent: () => import('./pages/orders/orders.component').then((c) => c.OrdersComponent),
        title: 'Orders'
    },
];
