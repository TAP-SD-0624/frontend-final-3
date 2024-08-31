import React from 'react';
import useBreadcrumbs, { BreadcrumbsRoute, BreadcrumbData } from 'use-react-router-breadcrumbs';
import { useLocation } from 'react-router-dom';
import useProduct from '@src/screens/hooks/useProduct';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { breadcrumbsClasses } from '@mui/material';

const useCustomBreadcrumbs = (): { breadcrumbs: BreadcrumbData[] } => {
    const DynamicCategoryBreadcrumb = () => {
        const location = useLocation();
        const categoryName = location?.state?.categoryName;
        const brandName = location?.state?.brandName;
        const productName = location?.state?.productName;

        const productId = location?.state?.productId;
        const { productData } = useProduct(productId);
        const category = productData?.product?.Category.name;
        const product = productData?.product?.name
        const orderId = location?.state?.orderId


        if (categoryName) {
            return <span>{categoryName}</span>;
        } else if (brandName) {
            return <span>{brandName}</span>;
        } else if (product) {
            return (<>
                <span>{category}</span>
                <NavigateNextIcon
                    sx={{
                        width: "24px",
                        height: "24px",
                        color: "var(--high-emphasis)",
                        marginTop: "-1px", // Adjust this value to move the icon down
                        verticalAlign: "middle",
                    }}
                    fontSize="small"
                />
                <span>{product}</span>
            </>)
        }
        else if (orderId) {
            return (
                <><span>My Orders</span><NavigateNextIcon
                    sx={{
                        width: "24px",
                        height: "24px",
                        color: "var(--high-emphasis)",
                        marginTop: "-1px", // Adjust this value to move the icon down
                        verticalAlign: "middle",
                    }}
                    fontSize="small" /><span>Order</span></>
            )
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
        { path: '/user-profile/order', breadcrumb: DynamicCategoryBreadcrumb },
    ];

    const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);

    return {
        breadcrumbs,
    };
};

export default useCustomBreadcrumbs;
