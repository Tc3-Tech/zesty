import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const EtsyShop = () => {
  const products = [
    {
      title: "Artisanal Air in Mason Jar",
      price: "49.99",
      description: "Hand-captured air from my living room. Each jar unique.",
      reviews: 420,
      rating: 4.9
    },
    {
      title: "Pre-worn Left Socks",
      price: "29.99",
      description: "Authentic single left socks. Right socks sold separately.",
      reviews: 69,
      rating: 4.7
    },
    {
      title: "Invisible Paint",
      price: "159.99",
      description: "You can't see it because it works so well!",
      reviews: 183,
      rating: 5.0
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-orange-500 mb-2">ArtisanalNonsense</h1>
        <p className="text-gray-600">Selling authentic artisanal items since 5 minutes ago</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
              <img src="/api/placeholder/200/200" alt={product.title} className="h-40 w-40 object-cover" />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-xl font-bold">${product.price}</span>
              <span className="ml-2 text-gray-500 text-sm">+ FREE shipping</span>
            </div>
            <div className="flex items-center mb-4">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="ml-1 text-sm">{product.rating}</span>
              <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-full flex-grow flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
              <button className="border border-gray-300 p-2 rounded-full">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EtsyShop;
