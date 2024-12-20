import api from './api';

export const getSalesReport = async() => {

    try{
        const response = await api.get('/AdminDashboard/SalesReport');
        return response.data;
    }

    catch(error){
        console.error('Error occured', error);
        throw error;
    }

}

export const getCustomerActivityLogs = async() => {

    try{
        const response = await api.get('/AdminDashboard/GetCustomerActivityLogs');
        return response.data;
    }

    catch(error){
        console.error('Error occured', error);
        throw error;
    }

}


export const getInventorySummary = async() => {

    try{
        const response = await api.get('/AdminDashboard/GetInventorySummary');
        return response.data;
    }

    catch(error){
        console.error('Error occured', error);
        throw error;
    }

}
