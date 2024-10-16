import React, { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false); // For cart modal visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For products dropdown
  const [cart, setCart] = useState([]); // For cart items
  const [searchTerm, setSearchTerm] = useState(""); // For search input
  const [filteredProducts, setFilteredProducts] = useState([]); // For search results

  // Dummy product data for search functionality
  const products = [
    { id: 1, name: "Organic Ghee", price: 500 },
    { id: 2, name: "Organic Honey", price: 300 },
    { id: 3, name: "Cold Pressed Oil", price: 250 },
    { id: 4, name: "Organic Milk", price: 50 },
  ];

  // Search function
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to open WhatsApp
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919782312413?text=Hello!%20I%20am%20interested%20in%20your%20products.",
      "_blank"
    );
  };

  // Function to toggle cart modal
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Function to toggle the Products dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-10 w-auto"
              src="/images/logo.png"
              alt="Your Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none flex items-center"
              >
                Products
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a
                    href="/ghee"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Ghee
                  </a>
                  <a
                    href="/honey"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Honey
                  </a>
                </div>
              )}
            </div>
            <a
              href="/bestseller"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Bestseller
            </a>
            <a
              href="/about-us"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              About Us
            </a>
          </div>

          {/* Right-side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search bar for desktop */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
                className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring"
              />
              <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>
            {/* Cart */}
            <button
              onClick={toggleCart}
              className="text-gray-700 hover:text-gray-900"
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="ml-1">{cart.length}</span>
            </button>
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="text-green-500 hover:text-green-600"
            >
              <FaWhatsapp className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none flex items-center"
            >
              Products
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <a
                  href="/ghee"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Ghee
                </a>
                <a
                  href="/honey"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Honey
                </a>
              </div>
            )}
          </div>
          <a
            href="/bestseller"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Bestseller
          </a>
          <a
            href="/about-us"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About Us
          </a>
          {/* Mobile Search and Icons */}
          <div className="flex items-center justify-between px-4 py-2">
            {/* Mobile Search Icon */}
            <FaSearch className="text-gray-700" />
            {/* Mobile Cart */}
            <button onClick={toggleCart} className="text-gray-700">
              <FaShoppingCart className="h-6 w-6" />
              <span className="ml-1">{cart.length}</span>
            </button>
            {/* Mobile WhatsApp */}
            <button onClick={handleWhatsAppClick} className="text-green-500">
              <FaWhatsapp className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="absolute right-0 top-16 mt-2 w-64 bg-white border rounded-lg shadow-lg z-30">
          <h2 className="text-center text-lg font-bold py-2">Cart</h2>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between px-4 py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <div className="text-right px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <p className="text-center py-4">Your cart is empty.</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
