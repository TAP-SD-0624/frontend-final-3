import React, { FC, PropsWithChildren } from 'react'
import useAccountContext from '@src/hooks/useAccountContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const { getUser } = useAccountContext();
    const user = getUser();

    if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;

    if (!children) return <Outlet />

    return (<>{children}</>);
};

export default ProtectedRoute;
