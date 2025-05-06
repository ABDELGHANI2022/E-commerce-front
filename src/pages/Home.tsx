import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { ShoppingBagIcon, TruckIcon, ShieldCheckIcon, HeadphonesIcon } from 'lucide-react';
const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  return <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Shop the latest</span>
                  <span className="block text-indigo-400">
                    trending products
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover our curated collection of premium products. From
                  cutting-edge electronics to stylish fashion, we have
                  everything you need.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Shopping" />
        </div>
      </div>
      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to shop online
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're committed to providing the best shopping experience with
              quality products and exceptional service.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Quality Products
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We carefully select all our products to ensure the highest
                    quality.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <TruckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Fast Delivery
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Quick and reliable shipping to your doorstep.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Secure Payments
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Your transactions are protected with industry-standard
                    security.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <HeadphonesIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    24/7 Support
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our customer support team is always ready to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Featured Products
            </h2>
            <Link to="/products" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all products<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="mt-6 sm:hidden">
            <Link to="/products" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all products<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default Home;