import React, { useEffect, useState } from 'react';
import SalesReport from '../components/SalesReport';
import CustomerActivity from '../components/CustomerActivity';
import InventorySummary from '../components/InventorySummary';
import { getSalesReport, getCustomerActivityLogs, getInventorySummary } from '../services/dashboard';
import Loader from '../components/Loader';

const ReportsAndAnalytics = () => {
  const [salesReport, setSalesReport] = useState([]);
  const [customerActivity, setCustomerActivity] = useState([]);
  const [inventorySummary, setInventorySummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadReports = async () => {
      setLoading(true);
      try {
        const salesData = await getSalesReport();
        const activityData = await getCustomerActivityLogs();
        const inventoryData = await getInventorySummary();

        setSalesReport(
          salesData.map((item) => ({
            month: item.month,
            sales: item.salesCount,
          }))
        );

        setCustomerActivity(
          activityData.map((item) => ({
            user: item.userId,
            lastLogin: new Date(item.orderDate).toLocaleDateString(),
            activity: item.justOrdered ? 'Ordered item' : 'No recent activity',
          }))
        );

        setInventorySummary(
          inventoryData.map((item) => ({
            product: item.productName,
            stock: item.stockQuantity,
          }))
        );
      } catch (error) {
        console.error('Error loading reports:', error);
        alert('Failed to load reports.');
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Reports and Analytics</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="space-y-8">
          <SalesReport data={salesReport} />
          <CustomerActivity data={customerActivity} />
          <InventorySummary data={inventorySummary} />
        </div>
      )}
    </div>
  );
};

export default ReportsAndAnalytics;
