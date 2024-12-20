import React from 'react';

const InventorySummary = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inventory Summary</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-4 text-left font-medium">Product</th>
            <th className="p-4 text-left font-medium">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition">
              <td className="p-4 border-b">{item.product}</td>
              <td className="p-4 border-b">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventorySummary;
