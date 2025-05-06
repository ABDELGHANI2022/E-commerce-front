import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MenuIcon, XIcon, SearchIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
const Header: React.FC = () => {
  const {
    state
  } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                ShopReact
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
            </div>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 p-1 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>}
            </Link>
          </div>
          <div className="flex sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 p-2 ml-2 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>}
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;