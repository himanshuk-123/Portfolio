import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 🔹 New function to close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.h1 
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Himanshu
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li 
              key={index} 
              className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500 transition"
              whileHover={{ scale: 1.1 }}
            >
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            className="text-gray-700 text-2xl"
            whileHover={{ scale: 1.2 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul 
          className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center space-y-4 py-4 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li 
              key={index} 
              className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500 transition"
              whileHover={{ scale: 1.1 }}
            >
              {/* 🔹 Calls closeMenu() when clicked */}
              <Link to={item.toLowerCase()} smooth={true} duration={500} onClick={closeMenu}>
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
