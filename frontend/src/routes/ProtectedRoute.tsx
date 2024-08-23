import React, { FC, PropsWithChildren } from 'react'
import useAccountContext from '@src/hooks/useAccountContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export interface ProtectedRouteProps {
    isAllowed?: boolean;
}

const ProtectedRoute: FC<PropsWithChildren<ProtectedRouteProps>> = ({ children, isAllowed = true,
}) => {
    const location = useLocation();
    const { getUser } = useAccountContext();
    const user = getUser();

    if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    // if (!children) return <Outlet />;

    // if (!user) return <Navigate to="/access-denied" replace state={{from: location.pathname}}/>;

    return (<>{children}</>);
};

export default ProtectedRoute;
