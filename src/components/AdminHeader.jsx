import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const managementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (managementRef.current && !managementRef.current.contains(event.target)) {
        setIsManagementOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsManagementOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link 
            to="/" 
            className="admin-title text-xl font-bold"
          >
            Admin Dashboard
          </Link>
        </div>
        <div className="flex space-x-6">

          <div className="relative" ref={managementRef}>
            <button
              onClick={() => setIsManagementOpen(!isManagementOpen)}
              className="text-white hover:text-blue-200" 
            >
              Management ▼
            </button>
            {isManagementOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48">
                <Link to="/products" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Product Management
                </Link>
                <Link to="/inventory" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Inventory Management
                </Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  Order Management
                </Link>
                <Link to="/users" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>
                  User Management
                </Link>
              </div>
            )}
          </div>

          <div>
            <Link 
              to="/reports" 
              className="text-white hover:text-blue-200"
            >
              Reports 
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
