import React from 'react';
import useBreadcrumbs, { BreadcrumbsRoute, BreadcrumbData } from 'use-react-router-breadcrumbs';
import { useLocation } from 'react-router-dom';

const useCustomBreadcrumbs = (): { breadcrumbs: BreadcrumbData[] } => {
    const DynamicCategoryBreadcrumb = () => {
        const location = useLocation();
        const categoryName = location?.state?.categoryName;
        const brandName = location?.state?.brandName;
        const productName = location?.state?.productName;

        if (categoryName) {
            return <span>{categoryName}</span>;
        } else if (brandName) {
            return <span>{brandName}</span>;
        } else if (productName) {
            return <span>{productName}</span>;
        } else {
            return <span>Items</span>; // Default breadcrumb if neither is present
        }
    };

    const breadcrumbRoutes: BreadcrumbsRoute[] = [
        { path: '/', breadcrumb: 'Home' },
        { path: '/about', breadcrumb: 'About' },
        { path: '/home', breadcrumb: 'Home' },
        { path: '/login', breadcrumb: 'Login' },
        { path: '/signUp', breadcrumb: 'Sign Up' },
        { path: '/items', breadcrumb: 'items' },
        { path: '/product', breadcrumb: DynamicCategoryBreadcrumb },
        { path: '/checkout', breadcrumb: 'Checkout' },
        { path: '/myCart', breadcrumb: 'My Cart' },
        { path: '/welcome', breadcrumb: 'Welcome' },
        { path: '/user-profile', breadcrumb: 'User Profile' },
        { path: '/user-profile/myOrders', breadcrumb: 'My Orders' },
        { path: '/user-profile/order', breadcrumb: 'Order' },
    ];

    const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);

    return {
        breadcrumbs,
    };
};

export default useCustomBreadcrumbs;
