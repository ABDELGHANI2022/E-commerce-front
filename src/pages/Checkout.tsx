import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCardIcon, LockIcon } from 'lucide-react';
const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const {
    state,
    clearCart
  } = useCart();
  const {
    items,
    total
  } = state;
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/');
      // In a real app, you would redirect to an order confirmation page
    }, 1500);
  };
  return <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Checkout
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Contact Information
                </h2>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input type="email" id="email" name="email" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>
              </div>
              {/* Shipping Address */}
              <div className="border-b border-gray-200 py-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Shipping Address
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input type="text" id="firstName" name="firstName" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input type="text" id="lastName" name="lastName" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input type="text" id="address" name="address" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input type="text" id="city" name="city" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input type="text" id="postalCode" name="postalCode" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input type="tel" id="phone" name="phone" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment */}
              <div className="pt-8">
                <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                <div className="mt-4 flex items-center">
                  <CreditCardIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    All transactions are secure and encrypted
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input type="text" id="cardNumber" name="cardNumber" required placeholder="1234 5678 9012 3456" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input type="text" id="expiration" name="expiration" required placeholder="MM/YY" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input type="text" id="cvc" name="cvc" required placeholder="123" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center`}>
                  {isSubmitting ? <>Processing...</> : <>
                      <LockIcon className="h-4 w-4 mr-1" /> Place Order
                    </>}
                </button>
              </div>
            </form>
          </div>
          {/* Order summary */}
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 p-6 border-b border-gray-200">
                Order summary
              </h2>
              <ul className="divide-y divide-gray-200">
                {items.map(item => <li key={item.product.id} className="flex py-6 px-6">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.product.name}</h3>
                          <p className="ml-4">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>)}
              </ul>
              <div className="border-t border-gray-200 px-6 py-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <p>Shipping</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <p>Tax</p>
                  <p>${(total * 0.07).toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <p>Total</p>
                  <p>${(total + total * 0.07).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;