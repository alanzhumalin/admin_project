import React, { useEffect, useState } from 'react';
import { getCatalogItems, updateCatalogItemStock } from '../services/productService';
import LowStockWarning from '../components/LowStockWarning';
import InventoryTable from '../components/InventoryTable';
import Loader from '../components/Loader';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState({ id: null, stockQuantity: '' });
  const [lowStockMessage, setLowStockMessage] = useState('');

  const loadInventory = async () => {
    setLoading(true);
    try {
      const data = await getCatalogItems();
      setInventory(data);

      const lowStockItems = data.filter((item) => item.stockQuantity <= 10);
      if (lowStockItems.length > 0) {
        const productNames = lowStockItems.map((item) => item.name).join(', ');
        setLowStockMessage(`Warning! Low stock for: ${productNames}`);
      } else {
        setLowStockMessage('');
      }
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const handleUpdateStock = async (id) => {
    try {
      await updateCatalogItemStock(id, { stockQuantity: editingItem.stockQuantity });
      setEditingItem({ id: null, stockQuantity: '' });
      loadInventory();
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      {lowStockMessage && <LowStockWarning message={lowStockMessage} />}

      {loading ? (
        <Loader />
      ) : (
        <InventoryTable
          inventory={inventory}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          handleUpdateStock={handleUpdateStock}
        />
      )}
    </div>
  );
};

export default InventoryManagement;
