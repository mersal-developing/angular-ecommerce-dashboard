import { NavigationItem } from "../../models/navigation.types";

export const NavLinks: NavigationItem[] = [
    {
        id: 'commerce',
        title: 'COMMERCE',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'productsNav',
                title: 'Products Insights',
                type: 'item',
                icon: 'insert_chart_outlined',
                hidden: false,
                url: '/Products',
                active: true
            },
            {
                id: 'ordersNav',
                title: 'Orders',
                type: 'tabs',
                icon: 'shopping_cart',
                hidden: false,
                children: [
                    {
                        id: 'orderSubNav',
                        title: 'Orders2222',
                        type: 'item',
                        icon: 'local_mall',
                        //  url: '/orders',
                        function: () => console.log('dd'),
                        hidden: false,
                    },
                    {
                        id: 'cart',
                        title: 'Cart',
                        type: 'tabs',
                        icon: 'shopping_cart',
                        hidden: false,
                        children: [
                            {
                                id: 'orderSubNav',
                                title: 'Orders',
                                type: 'item',
                                icon: 'local_mall',
                                url: '/orders',
                                hidden: false,
                            },
                            {
                                id: 'cart',
                                title: 'Cart',
                                type: 'item',
                                icon: 'shopping_cart',
                                url: '/cart',
                                hidden: false,

                            },
                        ],

                    },
                ],
            },
            {
                id: 'customer',
                title: 'Customer',
                type: 'collapsable',
                icon: 'person_outline',
                hidden: false,
                children: [
                    {
                        id: 'customer_list',
                        title: 'List',
                        type: 'item',
                        icon: 'people',
                        url: '/customer-list',
                        hidden: false,
                    },
                    {
                        id: '2',
                        title: 'Memberships',
                        type: 'item',
                        icon: 'card_membership',
                        url: '/memberships',
                        hidden: false,
                    },
                    {
                        id: 'audience',
                        title: 'Audience',
                        type: 'item',
                        icon: 'people_outline',
                        url: '/audience',
                        hidden: false,
                    },
                    {
                        id: 'wishlist',
                        title: 'Wishlist',
                        type: 'item',
                        icon: 'favorite',
                        url: '/wishlist',
                        hidden: false,
                    },

                ],
            },
        ],
    },
    {
        id: 'marketing',
        title: 'MARKETING',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'affiliateDashBoard',
                title: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                url: '/affiliate-dashboard',
                hidden: false,
            },
            {
                id: '3',
                title: 'Campaigns',
                type: 'item',
                icon: 'business_center',
                url: '/campaigns',
                hidden: false,
            },
            {
                id: 'pricerules',
                title: 'Price Rules',
                type: 'item',
                icon: 'attach_money',
                url: '/price-rules',
                hidden: false,
            },

        ],
    },
    {
        id: 'catalogue',
        title: 'CATALOG',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'reviews',
                title: 'Reviews',
                type: 'item',
                icon: 'star',
                url: '/reviews',
                hidden: false,
            },
            {
                id: 'products',
                title: 'Products',
                type: 'item',
                icon: 'shopping_cart',
                url: '/products',
                hidden: false,
            },

        ],
    },
    {
        id: 'contant',
        title: 'CONTENT',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'page',
                title: 'Pages',
                type: 'item',
                icon: 'pages',
                url: '/pages',
                hidden: false,
            },
            {
                id: 'widgetsNav',
                title: 'Widgets',
                type: 'collapsable',
                icon: 'widgets',
                hidden: false,
                children: [
                    {
                        id: 'collection',
                        title: 'Collection',
                        type: 'item',
                        icon: 'slideshow',
                        url: '/collection',
                        hidden: false,
                    },
                    {
                        id: 'widgets',
                        title: 'Widgets',
                        type: 'item',
                        icon: 'widgets',
                        url: '/widgets',
                        hidden: false,
                    },
                    {
                        id: 'navmenu',
                        title: 'Navigation Menu',
                        type: 'item',
                        icon: 'menu',
                        url: '/navigation-menu',
                        hidden: false,
                    },
                ],
            },

            {
                id: 'postsNav',
                title: 'Blog',
                type: 'collapsable',
                icon: 'local_post_office',
                hidden: false,
                children: [
                    {
                        id: 'posts',
                        title: 'Posts',

                        type: 'item',
                        icon: 'local_post_office',
                        url: 'posts/post',
                        hidden: false,
                    },
                    {
                        id: 'category',
                        title: 'Categories',
                        type: 'item',
                        icon: 'category',
                        url: 'posts/category',
                        hidden: false,
                    },
                    {
                        id: 'appearance',
                        title: 'Appearance',
                        type: 'item',
                        icon: 'palette',
                        url: 'posts/appearance',
                        hidden: false,
                    },
                ],
            },

            {
                id: 'media',
                title: 'Media',

                type: 'item',
                icon: 'perm_media',
                url: '/media',
                hidden: false,
            },
        ],
    },
    {
        id: 'notification',
        title: 'NOTIFICATION',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'templates',
                title: 'Templates',

                type: 'item',
                icon: 'notifications',
                url: '/notification-templates',
                hidden: false,
            },
            {
                id: 'notification_configuration',
                title: 'Configurations',

                type: 'item',
                icon: 'build',
                url: '/notifications',
                hidden: false,
            },
        ],
    },
    {
        id: 'salesChannels',
        title: 'SALES CHANNELS',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'myshops',
                title: 'My Shop',
                type: 'item',
                icon: 'store_mall_directory',
                url: '/apps',
                hidden: false,
            },

            {
                id: 'Integration',
                title: 'Integrations',

                type: 'collapsable',
                hidden: false,
                icon: 'apps',
                children: [
                    {
                        id: '1',
                        title: 'Shopify',
                        type: 'item',
                        icon: 'apps',
                        url: '/shopify',
                        hidden: false,
                    },
                    {
                        id: '6',
                        title: 'Wordpress',
                        type: 'item',
                        icon: 'drag_handle',
                        url: '/wordpress',
                        hidden: false,
                    },
                    {
                        id: "7",
                        title: "Analytics",
                        type: "item",
                        icon: "insert_chart_outlined",
                        url: "/analytics-integration",
                        hidden: false
                    },
                    {
                        id: "catalog-integration",
                        title: "Catalog",
                        type: "item",
                        icon: "book",
                        url: "/catalog-integration",
                        hidden: false
                    }
                ],
            },
        ],
    },
    {
        id: 'usermanagement',
        title: 'USER MANAGEMENT',
        type: 'group',
        hidden: false,
        children: [
            {
                id: 'users',
                title: 'Users',
                type: 'item',
                icon: 'supervised_user_circle',
                url: '/users',
                hidden: false,
            },
            {
                id: 'roles_and_permission',
                title: 'Roles & Permission',
                type: 'item',
                icon: 'security',
                url: '/roles-permissions',
                hidden: false,
            },
        ],
    },
    {
        id: 'loyaltyManagement',
        title: 'Loyalty Management',
        type: 'group',
        children: [
            {
                id: 'pointsSummary',
                title: 'Points Configuration',
                type: 'item',
                icon: 'list_alt',
                url: '/points-summary',
            },
            {
                id: 'loyaltyConfiguration',
                title: 'Loyalty Configuration',
                type: 'item',
                icon: 'display_settings',
                url: '/loyalty-configuration',
            },
            {
                id: 'loyaltyPointsRule',
                title: 'Loyalty Points Rule',
                type: 'item',
                icon: 'gavel',
                url: '/loyalty-points-rule',
            },
        ]
    }
]