import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    try {
        const response = await httpRequest.get(path, options);

        return response.data;
    } catch (err) {
        console.log('Failed to get: ', err);
        return err.response;
    }
};

export default httpRequest;
