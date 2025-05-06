import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';
interface CartItemProps {
  product: Product;
  quantity: number;
}
const CartItem: React.FC<CartItemProps> = ({
  product,
  quantity
}) => {
  const {
    updateQuantity,
    removeFromCart
  } = useCart();
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };
  return <div className="flex py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.name}</h3>
            <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">
            {product.description}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button onClick={() => handleQuantityChange(quantity - 1)} className="p-1 text-gray-600 hover:text-indigo-600">
              <MinusIcon className="h-4 w-4" />
            </button>
            <span className="px-2 py-1 text-gray-700">{quantity}</span>
            <button onClick={() => handleQuantityChange(quantity + 1)} className="p-1 text-gray-600 hover:text-indigo-600">
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex">
            <button type="button" onClick={() => removeFromCart(product.id)} className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
              <TrashIcon className="h-4 w-4 mr-1" /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default CartItem;