import api from './api';


export const support = async () => {


    try {
        const response = await api.post('/Support/SendSupport');
        return response.data;
    }

    catch (error) {
        console.error(error);
        throw error;
    }

}
