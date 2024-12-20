import React from 'react';

const ProductList = ({ products, handleEditProduct, handleDeleteProduct }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
        Product List
      </h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 border rounded-lg shadow-sm bg-white sm:flex sm:justify-between sm:items-center"
          >
            <div className="mb-2 sm:mb-0">
              <p className="text-lg font-medium">
                <strong>{product.name}</strong> — ${product.price}
              </p>
              <p className="text-gray-500">Stock: {product.stockQuantity}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <button
                onClick={() => handleEditProduct(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors mt-2 sm:mt-0"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
