import api from './api';

export const getCatalogBrands = async () => {
  try {
    const response = await api.get('/CatalogBrand/GetCatalogBrands');
    return response.data; 
  } catch (error) {
    console.error('Error fetching catalog brands:', error);
    throw error; 
  }
};
