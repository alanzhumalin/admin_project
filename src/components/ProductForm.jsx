import React from 'react';
import Select from 'react-select';

const ProductForm = ({
  brands,
  types,
  newProduct,
  setNewProduct,
  handleAddOrUpdateProduct,
  editingProductId,
}) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
        {editingProductId ? 'Edit Product' : 'Add New Product'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
          }
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={newProduct.pictureUrl}
          onChange={(e) =>
            setNewProduct({ ...newProduct, pictureUrl: e.target.value })
          }
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={newProduct.stockQuantity}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              stockQuantity: parseInt(e.target.value),
            })
          }
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Brand
          </label>
          <Select
            options={brands}
            value={
              newProduct.catalogBrandId
                ? brands.find((b) => b.value === newProduct.catalogBrandId)
                : null
            }
            placeholder="Ex. Adidas"
            onChange={(selectedOption) =>
              setNewProduct({
                ...newProduct,
                catalogBrandId: selectedOption.value,
              })
            }
            className="rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Type
          </label>
          <Select
            options={types}
            value={
              newProduct.catalogTypeId
                ? types.find((t) => t.value === newProduct.catalogTypeId)
                : null
            }
            placeholder="Ex. Summer shoes"
            onChange={(selectedOption) =>
              setNewProduct({
                ...newProduct,
                catalogTypeId: selectedOption.value,
              })
            }
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <button
          onClick={handleAddOrUpdateProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto"
        >
          {editingProductId ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
