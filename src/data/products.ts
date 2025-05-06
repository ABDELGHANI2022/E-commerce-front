export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
export const products: Product[] = [{
  id: 1,
  name: "Wireless Headphones",
  description: "Experience crystal clear audio with our premium wireless headphones. Features noise cancellation and 30-hour battery life.",
  price: 199.99,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: "Electronics"
}, {
  id: 2,
  name: "Smart Fitness Watch",
  description: "Track your fitness goals with this advanced smart watch. Includes heart rate monitoring, GPS, and customizable workout plans.",
  price: 149.99,
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
  category: "Electronics"
}, {
  id: 3,
  name: "Leather Messenger Bag",
  description: "Handcrafted genuine leather messenger bag perfect for work or casual use. Multiple compartments for organization.",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80",
  category: "Fashion"
}, {
  id: 4,
  name: "Stainless Steel Water Bottle",
  description: "Eco-friendly insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
  price: 24.99,
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  category: "Home"
}, {
  id: 5,
  name: "Organic Cotton T-Shirt",
  description: "Comfortable and breathable organic cotton t-shirt. Ethically sourced and sustainably manufactured.",
  price: 29.99,
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  category: "Fashion"
}, {
  id: 6,
  name: "Wireless Charging Pad",
  description: "Fast wireless charging for all Qi-enabled devices. Sleek design with LED indicator and anti-slip surface.",
  price: 34.99,
  image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
  category: "Electronics"
}, {
  id: 7,
  name: "Minimalist Desk Lamp",
  description: "Modern desk lamp with adjustable brightness and color temperature. Energy-efficient LED with touch controls.",
  price: 59.99,
  image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  category: "Home"
}, {
  id: 8,
  name: "Gourmet Coffee Beans",
  description: "Premium single-origin coffee beans, ethically sourced and freshly roasted for the perfect cup every morning.",
  price: 18.99,
  image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  category: "Food"
}];
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
export const getFeaturedProducts = (): Product[] => {
  // Return first 4 products as featured for demo purposes
  return products.slice(0, 4);
};