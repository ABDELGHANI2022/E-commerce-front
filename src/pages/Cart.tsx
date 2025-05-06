import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { ShoppingBagIcon } from 'lucide-react';
const Cart: React.FC = () => {
  const {
    state,
    clearCart
  } = useCart();
  const {
    items,
    total
  } = state;
  if (items.length === 0) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Start shopping to add items to your cart.
          </p>
          <div className="mt-6">
            <Link to="/products" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>;
  }
  return <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Shopping Cart
        </h1>
        <div className="mt-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {items.map(item => <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />)}
              </div>
              <div className="mt-4 flex justify-between">
                <button onClick={clearCart} className="text-sm text-indigo-600 hover:text-indigo-500">
                  Clear Cart
                </button>
                <Link to="/products" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-4">
              <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="text-sm font-medium text-gray-900">$0.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Tax</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${(total * 0.07).toFixed(2)}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <p className="text-base font-medium text-gray-900">
                      Order total
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      ${(total + total * 0.07).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/checkout" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Cart;