import api from './api';

export const getCatalogTypes = async () => {
  try {
    const response = await api.get('/CatalogType/GetCatalogTypes');
    return response.data;
  } catch (error) {
    console.error('Error fetching catalog types:', error);
    throw error; 
  }
};
