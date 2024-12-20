const InventoryRow = ({ item, editingItem, setEditingItem, handleUpdateStock }) => {
  const isEditing = editingItem.id === item.id;

  return (
    <tr
      className={`${
        item.stockQuantity <= 10 ? 'bg-red-50' : 'bg-white'
      } hover:bg-gray-100 transition`}
    >
      {/* Product Name */}
      <td className="p-4 border-b w-1/2 text-left font-medium text-gray-800">
        {item.name}
      </td>

      {/* Stock Quantity */}
      <td className="p-4 border-b text-center w-1/4">
        {isEditing ? (
          <input
            type="number"
            value={editingItem.stockQuantity}
            onChange={(e) =>
              setEditingItem({
                ...editingItem,
                stockQuantity: parseInt(e.target.value) || '',
              })
            }
            className="border rounded px-2 py-1 w-20 focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`${
              item.stockQuantity <= 10 ? 'text-red-500 font-bold' : ''
            }`}
          >
            {item.stockQuantity}
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="p-4 border-b text-center w-1/4">
        {isEditing ? (
          <>
            <button
              onClick={() => handleUpdateStock(item.id)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setEditingItem({ id: null, stockQuantity: '' })}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              setEditingItem({ id: item.id, stockQuantity: item.stockQuantity })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Stock
          </button>
        )}
      </td>
    </tr>
  );
};

export default InventoryRow;
