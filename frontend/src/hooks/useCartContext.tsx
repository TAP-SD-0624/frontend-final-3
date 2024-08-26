import React from 'react'
import { useContext } from "react";
import { CartContext, CartContextValues } from '@src/providers/CartContext';

const useCartContext = (): CartContextValues => {
    const context = useContext(CartContext);

    if (!context)
        throw new Error("useCartContext must be used within an AuthProvider");

    return useContext(CartContext);
}

export default useCartContext