import React, { ReactNode, useState, createContext, FC, useEffect } from 'react'
import { CartItem } from '../types'
import { noop } from '@src/utils';
import bagImage from "@src/assets/pink-bag-small.png";

const initialCart: CartItem[] = [
  {
    id: '1',
    name: "Leather Coach Bag",
    brand: "Coach",
    price: 54.69,
    qty: 1,
    imageUrl: bagImage, // Replace 'path_to_bag_image' with the actual image path or variable
  },
  {
    id: '2',
    name: "Leather Coach Bag",
    brand: "Coach",
    price: 54.69,
    qty: 3,
    imageUrl: bagImage, // Replace 'path_to_bag_image' with the actual image path or variable
  },
];

export interface CartContextValues {
  getCart: () => CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextValues>({
  getCart: () => [],
  addToCart: noop,
  increaseQuantity: noop,
  decreaseQuantity: noop,
  removeFromCart: noop,
  updateQuantity: noop,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  // const [cart, setCart] = useState<CartItem[] | []>([]);
  // useEffect(() => {
  //   const storedCart = localStorage.getItem('cart');
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : initialCart;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getCart = () => {
      return cart;
  }

  const addToCart = (item: CartItem) => {
    setCart((prevCart: CartItem[]) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const contextValues: CartContextValues = {
    addToCart: addToCart,
    decreaseQuantity: decreaseQuantity,
    increaseQuantity: increaseQuantity,
    removeFromCart: removeFromCart,
    updateQuantity: updateQuantity,
    getCart: getCart
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};