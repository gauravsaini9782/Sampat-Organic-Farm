import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const bestsellingProducts = [
  {
    id: 1,
    title: "Organic Cow Ghee - 1kg",
    description: "Rich in flavor and nutrients, perfect for daily use.",
    image:
      "https://images.unsplash.com/photo-1600203197050-c09dfaae5d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    originalPrice: 1800,
    discountedPrice: 1548,
    discount: 14,
    reviews: 90,
  },
  {
    id: 2,
    title: "Organic Honey - 500g",
    description: "Pure, raw, and unfiltered organic honey.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    originalPrice: 700,
    discountedPrice: 602,
    discount: 14,
    reviews: 80,
  },
  {
    id: 3,
    title: "Organic Cow Ghee - 500g",
    description: "Pure organic cow ghee from grass-fed cows.",
    image:
      "https://images.unsplash.com/photo-1600203197050-c09dfaae5d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    originalPrice: 1000,
    discountedPrice: 860,
    discount: 14,
    reviews: 120,
  },
  {
    id: 4,
    title: "Organic Honey - 1kg",
    description: "Packed with antioxidants and nutrients.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    originalPrice: 1200,
    discountedPrice: 1032,
    discount: 14,
    reviews: 65,
  },
];

const BestsellerPage = () => {
  const [quantity, setQuantity] = useState("500g");
  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartMessage(`${product.title} has been added to the cart!`);
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

  const openWhatsApp = (product) => {
    const message = `Hi, I'm interested in more information about ${product.title}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-green-800 mb-12">
          Bestsellers
        </h2>

        {/* Cart message pop-up */}
        {cartMessage && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-lg shadow-lg">
            {cartMessage}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellingProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-green-700">
                {product.title}
              </h4>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-2 text-yellow-600">
                ⭐ {product.reviews} reviews
              </div>
              <div className="mt-4">
                <span className="line-through text-gray-500">
                  ₹{product.originalPrice}
                </span>
                <span className="ml-2 text-green-700 font-bold">
                  ₹{product.discountedPrice}
                </span>
                <span className="ml-2 text-red-500">
                  {product.discount}% OFF
                </span>
              </div>
              <select
                className="mt-4 w-full bg-gray-100 border border-gray-300 text-gray-700 p-2 rounded-lg focus:outline-none"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="3kg">3kg</option>
                <option value="5kg">5kg</option>
              </select>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-700"
                  onClick={() => handleAddToCart(product)}
                >
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  className="text-green-500 text-2xl hover:text-green-700"
                  onClick={() => openWhatsApp(product)}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerPage;
