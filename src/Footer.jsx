// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: sampat@info.com</p>
          <p>Phone: +91 788470568</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SAMPAT @All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
