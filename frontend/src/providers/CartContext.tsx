import React, { ReactNode, useState, createContext, FC, useEffect } from 'react'
import { CartItem } from '../types'
import { noop } from '@src/utils';
import bagImage from "@src/assets/pink-bag-small.png";
import useSnackbar from '@src/hooks/useSnackbar';


interface product {
  isLimitedEdition: boolean;
  id: string;
  name: string;
  brief: string;
  description: string;
  price: number;
  stock: number;
  discountRate: number;
  rating: number;
  createdAt: string;
  qty: number;
  Category: {
    name: string;
    id: string;
  };
  Brand: {
    name: string;
    id: string;
  };
  ProductImages: [
    {
      path: string;
    }
  ];
}

export interface CartContextValues {
  getCart: () => product[];
  addToCart: (item: product) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValues>({
  getCart: () => [],
  addToCart: noop,
  increaseQuantity: noop,
  decreaseQuantity: noop,
  removeFromCart: noop,
  updateQuantity: noop,
  clearCart: noop,
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
  const [cart, setCart] = useState<product[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getCart = () => {
    return cart;
  }

  const { showSnackbar } = useSnackbar();

  const addToCart = (item: product) => {
    setCart((prevCart: product[]) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      const beginning = item.stock === 0;
      if (existingItem) {
        if (existingItem.qty < existingItem.stock) {
          return prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, qty: cartItem.qty + 1 }
              : cartItem
          );
        } else {
          showSnackbar({ severity: "warning", message: `Cannot add more. Only ${existingItem.stock} in stock.` })
          return prevCart;
        }
      }
      if (beginning) {
        showSnackbar({ severity: "warning", message: `Cannot add to cart. Only ${item.stock} in stock.` })
        return [...prevCart];

      }
      return [...prevCart, { ...item, qty: 1 }];
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
      prevCart.map(item => {
        if (item.id === id) {
          if (item.qty < item.stock) {
            return { ...item, qty: item.qty + 1 };
          } else {
            showSnackbar({ severity: "warning", message: `Cannot add more. Only ${item.stock} in stock.` })
          }
        }
        return item;
      })
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

  const clearCart = () => {
    setCart([]);
  };

  const contextValues: CartContextValues = {
    addToCart: addToCart,
    decreaseQuantity: decreaseQuantity,
    increaseQuantity: increaseQuantity,
    removeFromCart: removeFromCart,
    updateQuantity: updateQuantity,
    getCart: getCart,
    clearCart: clearCart,
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};