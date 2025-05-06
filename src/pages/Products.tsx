import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { FilterIcon } from 'lucide-react';
const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(products.map(product => product.category)));
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
  return <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          All Products
        </h1>
        <p className="mt-4 max-w-xl text-gray-500">
          Browse our collection of high-quality products. Filter by category to
          find exactly what you're looking for.
        </p>
        <div className="mt-8 flex flex-col md:flex-row">
          {/* Filters */}
          <div className="md:w-64 mb-6 md:mb-0 md:mr-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <FilterIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="category-all" name="category" type="radio" checked={selectedCategory === null} onChange={() => setSelectedCategory(null)} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="category-all" className="ml-3 text-sm text-gray-600">
                    All Categories
                  </label>
                </div>
                {categories.map(category => <div key={category} className="flex items-center">
                    <input id={`category-${category}`} name="category" type="radio" checked={selectedCategory === category} onChange={() => setSelectedCategory(category)} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                      {category}
                    </label>
                  </div>)}
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Price Range
              </h3>
              <div className="mt-1">
                <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="0" max="200" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
          </div>
          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            {filteredProducts.length === 0 && <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found in this category.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default Products;