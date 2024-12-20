import api from './api';

export const getCatalogItems = async () => {
  const response = await api.get('/CatalogItem/GetCatalogItems');
  return response.data;
};

export const getCatalogItemById = async (id) => {
  const response = await api.get(`/CatalogItem/GetCatalogItemById/${id}`);
  return response.data;
};


export const createCatalogItem = async (itemData) => {
  const response = await api.post('/CatalogItem/CreateCatalogItem', itemData);
  return response.data;
};


export const updateCatalogItemDetails = async (id, updatedData) => {
  const response = await api.put(`/CatalogItem/UpdateCatalogItemDetails/${id}`, updatedData);
  return response.data;
};


export const updateCatalogItemStock = async (id, stockData) => {
  const response = await api.put(`/CatalogItem/UpdateCatalogItemStockQuantity/${id}`, stockData);
  return response.data;
};


export const updateCatalogItemPictureUrl = async (id, pictureUrl) => {
  const response = await api.put(`/CatalogItem/UpdateCatalogItemPictureUrl/${id}`, {
    pictureUrl,
  });
  return response.data;
};


export const updateCatalogItemType = async (id, catalogTypeId) => {
  const response = await api.put(`/CatalogItem/UpdateCatalogType/${id}`, {
    catalogTypeId,
  });
  return response.data;
};


export const updateCatalogItemBrand = async (id, catalogBrandId) => {
  const response = await api.put(`/CatalogItem/UpdateCatalogBrand/${id}`, {
    catalogBrandId,
  });
  return response.data;
};



export const deleteCatalogItem = async (id) => {
  const response = await api.delete(`/CatalogItem/DeleteCatalogItem/${id}`);
  return response.data;
};
