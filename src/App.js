import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/AdminHeader'; 
import Home from './pages/AdminHome';
import ProductManagement from './pages/ProductManagement';
import InventoryManagement from './pages/InventoryManagement';
import OrderManagement from './pages/OrderManagement';
import UserManagement from './pages/UserManagement';
import ContentManagement from './pages/CMS.jsx';
import ReportsAndAnalytics from './pages/Reports.jsx';

const App = () => {
  return (
    
      <Router>
        <Header />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/cms" element={<ContentManagement />} />
            <Route path="/reports" element={<ReportsAndAnalytics />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
