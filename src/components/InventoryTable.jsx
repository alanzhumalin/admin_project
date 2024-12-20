import React from 'react';
import InventoryRow from './InventoryRow';

const InventoryTable = ({ inventory, editingItem, setEditingItem, handleUpdateStock }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <table className="min-w-full table-auto border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-4 text-left border-b font-medium w-1/2">Product</th>
            <th className="p-4 text-center border-b font-medium w-1/4">Stock Level</th>
            <th className="p-4 text-center border-b font-medium w-1/4">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {inventory.map((item) => (
            <InventoryRow
              key={item.id}
              item={item}
              editingItem={editingItem}
              setEditingItem={setEditingItem}
              handleUpdateStock={handleUpdateStock}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
