import React, { useEffect, useState } from 'react';
import { getOrders, confirmOrder } from '../services/orderService';
import OrderList from '../components/OrderList';
import Loader from '../components/Loader';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processingOrderId, setProcessingOrderId] = useState(null);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleConfirmOrder = async (orderId) => {
    setProcessingOrderId(orderId);
    try {
      await confirmOrder(orderId);
      alert(`Order ${orderId} has been confirmed successfully!`);
      loadOrders();
    } catch (error) {
      console.error('Error confirming order:', error);
      alert(`Failed to confirm order ${orderId}.`);
    } finally {
      setProcessingOrderId(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>

      {loading ? (
        <Loader />
      ) : (
        <OrderList
          orders={orders}
          handleConfirmOrder={handleConfirmOrder}
          processingOrderId={processingOrderId}
        />
      )}
    </div>
  );
};

export default OrderManagement;
