import React from 'react';

const OrderDetails = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
        >
          <div>
            <p className="font-medium text-gray-800">{item.productName}</p>
            <p className="text-sm text-gray-500">
              {item.quantity} pcs × {item.unitPrice} ₸ = {item.totalPrice} ₸
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderDetails;
