import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, CheckIcon, StarIcon } from 'lucide-react';
const ProductDetail: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const product = id ? getProductById(parseInt(id)) : null;
  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Product not found
          </h2>
          <p className="mt-2 text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <button onClick={() => navigate('/products')} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Back to Products
          </button>
        </div>
      </div>;
  }
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  return <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-96 object-cover object-center" />
            </div>
          </div>
          {/* Product details */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>
            </div>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map(rating => <StarIcon key={rating} className={`${rating < 4 ? 'text-yellow-400' : 'text-gray-300'} h-5 w-5 flex-shrink-0`} aria-hidden="true" />)}
              </div>
              <p className="ml-2 text-sm text-gray-500">42 reviews</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900">Category:</h3>
                <p className="ml-2 text-sm text-gray-500">{product.category}</p>
              </div>
              <div className="mt-2 flex items-center">
                <h3 className="text-sm font-medium text-gray-900">
                  Availability:
                </h3>
                <p className="ml-2 text-sm text-green-600">In Stock</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900 mr-3">
                  Quantity:
                </h3>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-gray-600 hover:text-indigo-600">
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-700">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-gray-600 hover:text-indigo-600">
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <button onClick={handleAddToCart} className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                  {isAdded ? <>
                      <CheckIcon className="h-5 w-5 mr-2" /> Added to Cart
                    </> : <>
                      <ShoppingCartIcon className="h-5 w-5 mr-2" /> Add to Cart
                    </>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetail;