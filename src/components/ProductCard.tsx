import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from 'lucide-react';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };
  return <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover object-center group-hover:opacity-75" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <button onClick={handleAddToCart} className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ShoppingCartIcon className="h-4 w-4 mr-1" />
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>;
};
export default ProductCard;