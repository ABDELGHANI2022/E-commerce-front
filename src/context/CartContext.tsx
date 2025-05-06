import React, { createContext, useContext, useReducer } from 'react';
import { Product } from '../data/products';
type CartItem = {
  product: Product;
  quantity: number;
};
type CartState = {
  items: CartItem[];
  total: number;
};
type CartAction = {
  type: 'ADD_ITEM';
  payload: {
    product: Product;
    quantity: number;
  };
} | {
  type: 'REMOVE_ITEM';
  payload: {
    productId: number;
  };
} | {
  type: 'UPDATE_QUANTITY';
  payload: {
    productId: number;
    quantity: number;
  };
} | {
  type: 'CLEAR_CART';
};
type CartContextType = {
  state: CartState;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      {
        const {
          product,
          quantity
        } = action.payload;
        const existingItem = state.items.find(item => item.product.id === product.id);
        if (existingItem) {
          // Update quantity if item already exists
          return {
            ...state,
            items: state.items.map(item => item.product.id === product.id ? {
              ...item,
              quantity: item.quantity + quantity
            } : item),
            total: state.total + product.price * quantity
          };
        } else {
          // Add new item
          return {
            ...state,
            items: [...state.items, {
              product,
              quantity
            }],
            total: state.total + product.price * quantity
          };
        }
      }
    case 'REMOVE_ITEM':
      {
        const {
          productId
        } = action.payload;
        const itemToRemove = state.items.find(item => item.product.id === productId);
        if (!itemToRemove) return state;
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== productId),
          total: state.total - itemToRemove.product.price * itemToRemove.quantity
        };
      }
    case 'UPDATE_QUANTITY':
      {
        const {
          productId,
          quantity
        } = action.payload;
        const itemToUpdate = state.items.find(item => item.product.id === productId);
        if (!itemToUpdate) return state;
        // Calculate the price difference
        const priceDifference = itemToUpdate.product.price * (quantity - itemToUpdate.quantity);
        return {
          ...state,
          items: state.items.map(item => item.product.id === productId ? {
            ...item,
            quantity
          } : item),
          total: state.total + priceDifference
        };
      }
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };
    default:
      return state;
  }
};
export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });
  const addToCart = (product: Product, quantity: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        quantity
      }
    });
  };
  const removeFromCart = (productId: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        productId
      }
    });
  };
  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        productId,
        quantity
      }
    });
  };
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };
  return <CartContext.Provider value={{
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }}>
      {children}
    </CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};