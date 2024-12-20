import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';
import { getCatalogItems } from '../services/productService';
import { getAllUsers } from '../services/userService';
import Dashboard from '../components/DashBoard';

const Home = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const products = await getCatalogItems();
      setTotalProducts(products.length);

      const orders = await getOrders();
      setTotalOrders(orders.length);

      const users = await getAllUsers();
      setTotalUsers(users.length);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Admin Panel</h1>
      <p className="text-gray-600 text-center mb-6">
        Use the navigation above to manage products, orders, inventory, users, and more.
      </p>

      <Dashboard
        stats={[
          { label: 'Total Products', value: totalProducts, icon: 'FiPackage', color: 'text-blue-500' },
          { label: 'Total Orders', value: totalOrders, icon: 'FiShoppingCart', color: 'text-green-500' },
          { label: 'Total Users', value: totalUsers, icon: 'FiUsers', color: 'text-purple-500' },
        ]}
      />
    </div>
  );
};

export default Home;
