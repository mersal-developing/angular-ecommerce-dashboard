import { NavigationItem } from "./navigation.types";

export const NavLinks: NavigationItem[] = [

    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'laptop_windows',
        hidden: false,
        url: '/dashboard',
        active: true
    },
    {
        id: 'products-group',
        title: 'Products',
        type: 'collapsable',
        icon: 'dashboard',
        hidden: false,
        active: true,
        children: [
            {
                id: 'createProduct',
                title: 'Add Product',
                type: 'item',
                icon: 'laptop_windows',
                hidden: false,
                url: '/products/create',
                active: true
            },
            {
                id: 'products',
                title: 'all products',
                type: 'item',
                icon: 'dashboard',
                hidden: false,
                url: '/products',
                active: true,
                exactMatch: true
            }

        ]
    },
    {
        id: 'customers',
        title: 'Customers',
        type: 'item',
        icon: 'group',
        hidden: false,
        url: '/customers',
        active: false
    },
    {
        id: 'orders',
        title: 'Orders',
        type: 'item',
        icon: 'shopping_cart',
        hidden: false,
        url: '/orders',
        active: true
    },
    {
        id: 'media',
        title: 'Media',
        type: 'item',
        icon: 'perm_media',
        hidden: false,
        url: '/media',
        active: true
    },



]