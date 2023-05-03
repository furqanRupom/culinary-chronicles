import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white font-Nunito mt-24">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <a href="#">Events</a>
              </li>
              <li className="mb-2">
                <a href="#">Classes</a>
              </li>
              <li className="mb-2">
                <a href="#">Gallery</a>
              </li>
              <li className="mb-2">
                <a href="#">Menu</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <a href="tel:+1234567890">+123 456 7890</a>
              </li>
              <li className="mb-2">
                <a href="mailto:info@culinarychronicles.com">
                  info@culinarychronicles.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Secure Payment</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <FiLock />
              <span>Secure online payments</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <BsCreditCard className="text-gray-600" />
              <div className="text-gray-600">
                We accept the following payment methods:
              </div>
            </div>
            <div className="flex space-x-4 mt-2">
              <div>
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                  alt="PayPal"
                  className="h-6"
                />
              </div>
              <div>
                <img
                  src="https://stripe.com/img/v3/home/twitter.png"
                  alt="Stripe"
                  className="h-6"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl text-gray-600">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-medium mb-4">Join Our Newsletter</h3>
            <form className="flex flex-col md:flex-row">
              <input type="email" placeholder="Your email address" />
              <button className="bg-red-500 text-white px-4 py-2 mt-4 md:mt-0 md:ml-4 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2023 Culinary Chronicles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
