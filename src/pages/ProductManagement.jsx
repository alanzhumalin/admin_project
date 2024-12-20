import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import {
  getCatalogItems,
  createCatalogItem,
  updateCatalogItemDetails,
  updateCatalogItemPictureUrl,
  updateCatalogItemType,
  updateCatalogItemBrand,
  updateCatalogItemStock,
  deleteCatalogItem,
} from '../services/productService';
import { getCatalogBrands } from '../services/brandService';
import { getCatalogTypes } from '../services/typeService';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    pictureUrl: '',
    stockQuantity: '',
    catalogTypeId: '',
    catalogBrandId: '',
  });
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await getCatalogItems();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const loadBrandsAndTypes = async () => {
    try {
      const brandsData = await getCatalogBrands();
      const typesData = await getCatalogTypes();

      setBrands(
        brandsData.map((brand) => ({
          value: brand.id,
          label: brand.brand,
        }))
      );

      setTypes(
        typesData.map((type) => ({
          value: type.id,
          label: type.type,
        }))
      );
    } catch (error) {
      console.error('Error loading brands or types:', error);
    }
  };

  useEffect(() => {
    loadProducts();
    loadBrandsAndTypes();
  }, []);

  const handleAddOrUpdateProduct = async () => {
    try {
      const productToSubmit = {
        ...newProduct,
        pictureUrl: newProduct.pictureUrl.trim()
          ? newProduct.pictureUrl
          : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081',
      };

      if (editingProductId) {
        await updateCatalogItemDetails(editingProductId, {
          name: productToSubmit.name,
          description: productToSubmit.description,
          price: productToSubmit.price,
        });
        await updateCatalogItemPictureUrl(editingProductId, productToSubmit.pictureUrl);
        await updateCatalogItemType(editingProductId, productToSubmit.catalogTypeId);
        await updateCatalogItemBrand(editingProductId, productToSubmit.catalogBrandId);
        await updateCatalogItemStock(editingProductId, {
          stockQuantity: productToSubmit.stockQuantity,
        });
      } else {
        await createCatalogItem(productToSubmit);
      }

      setNewProduct({
        name: '',
        description: '',
        price: '',
        pictureUrl: '',
        stockQuantity: '',
        catalogTypeId: '',
        catalogBrandId: '',
      });
      setEditingProductId(null);
      loadProducts();
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteCatalogItem(id);
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProduct({
      name: product.name,
      description: product.description,
      price: product.price,
      pictureUrl: product.pictureUrl || '',
      stockQuantity: product.stockQuantity,
      catalogTypeId: product.catalogTypeId,
      catalogBrandId: product.catalogBrandId,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

    
      <div className="space-y-8">
        <ProductForm
          brands={brands}
          types={types}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddOrUpdateProduct={handleAddOrUpdateProduct}
          editingProductId={editingProductId}
        />

        {loading ? (
          <Loader />
        ) : (
          <ProductList
            products={products}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
