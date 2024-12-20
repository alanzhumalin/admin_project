import React from 'react';
import OrderDetails from './OrderDetails';

const formatDeliveryTime = (deliveryTime) => {
  const [hours, minutes] = deliveryTime.split(':').map(Number);
  const hourText = hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''}` : '';
  const minuteText = minutes > 0 ? `${minutes} min${minutes > 1 ? 's' : ''}` : '';
  return `${hourText} ${minuteText}`.trim() || "N/A";
};

const OrderRow = ({ order, handleConfirmOrder, processingOrderId }) => {
  const { shippingMethod, shippingDetails } = order;

  return (
    <tr className="hover:bg-gray-100 transition text-sm sm:text-base">
      <td className="p-4 border-b text-gray-800">{order.id}</td>
      <td className="p-4 border-b text-gray-800">{order.userId}</td>
      <td className="p-4 border-b text-gray-800">
        {new Date(order.orderDate).toLocaleDateString()}
      </td>
      <td className="p-4 border-b text-gray-800">{order.totalPrice} ₸</td>
      <td className="p-4 border-b text-gray-800">
        {shippingMethod ? `${shippingMethod.name} (${shippingMethod.cost} ₸)` : "N/A"}
      </td>
      <td className="p-4 border-b text-gray-800">
        {shippingMethod?.deliveryTime ? formatDeliveryTime(shippingMethod.deliveryTime) : "N/A"}
      </td>
      <td className="p-4 border-b text-gray-800">
        {shippingDetails?.addressToShip || "Address Missing"}
        <br />
        {shippingDetails?.phoneNumber || "Phone Missing"}
      </td>
      <td className="p-4 border-b">
        <OrderDetails items={order.items} />
      </td>
      <td className="p-4 border-b">
        {order.isConfirmed ? (
          <span className="text-green-600 font-semibold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirmOrder(order.id)}
            className={`px-4 py-2 rounded-lg text-white text-sm ${
              processingOrderId === order.id
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            } transition`}
            disabled={processingOrderId === order.id}
          >
            {processingOrderId === order.id ? 'Processing...' : 'Confirm'}
          </button>
        )}
      </td>
    </tr>
  );
};



export default OrderRow;
