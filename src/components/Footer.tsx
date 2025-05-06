import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, CreditCardIcon, TruckIcon, ShieldIcon } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopReact</h3>
            <p className="text-gray-300 text-sm">
              Your one-stop shop for quality products at affordable prices.
              We're committed to providing the best shopping experience.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">We Promise</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <TruckIcon className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Fast delivery</span>
              </li>
              <li className="flex items-center">
                <ShieldIcon className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Secure payments</span>
              </li>
              <li className="flex items-center">
                <CreditCardIcon className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Multiple payment methods</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} ShopReact. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;