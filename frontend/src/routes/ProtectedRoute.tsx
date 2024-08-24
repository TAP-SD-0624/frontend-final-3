import React, { FC } from 'react'
import useAccountContext from '@src/hooks/useAccountContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const ProtectedRoute: FC = () => {
    const location = useLocation();
    const { getUser } = useAccountContext();
    const user = getUser();

    if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;

    return (<Outlet />);
};

export default ProtectedRoute;
