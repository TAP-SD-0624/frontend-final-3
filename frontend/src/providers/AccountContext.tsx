import React, { ReactNode, useState, createContext } from 'react'
import { User } from '@src/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { Theme, useMediaQuery } from "@mui/material";
import { FC } from 'react';
import { noop } from '@src/utils';


interface OnLoginOptions {
    shouldNavigate?: boolean;
}

interface OnLogoutOptions {
    shouldNavigate?: boolean;
}

export interface AccountContextValues {
    getUser: () => User | null;
    onLogin: (user: User, options?: OnLoginOptions) => void;
    onLogout: (options?: OnLogoutOptions) => void;
    isMobile: boolean;
}

export const AccountContext = createContext<AccountContextValues>({
    getUser: () => null,
    onLogin: noop,
    onLogout: noop,
    isMobile: false
});

interface AccountProviderProps {
    children: ReactNode;
}

export const AccountProvider: FC<AccountProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState<User | null>(null);

    const getUser = () => {
        const userStr = localStorage.getItem("user");
        if (userStr)
            return JSON.parse(userStr) as User;
        return null;
    }

    const handleLogin = (user: User, options: OnLoginOptions = { shouldNavigate: false }) => {
        const { shouldNavigate } = options;
        setUser(user);
        if (shouldNavigate) {
            // const origin = location.state?.from || './welcome' ;
            navigate("./home");
        }
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("access-token");
        navigate("login");
    }

    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const contextValues: AccountContextValues = {
        getUser,
        onLogin: handleLogin,
        onLogout: handleLogout,
        isMobile
    }

    return (
        <AccountContext.Provider value={contextValues}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;







