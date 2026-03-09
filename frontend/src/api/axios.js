import axios from "axios";

const api = axios.create({
    baseURL: 'https://regquest-backend.onrender.com',
});

api.interceptors.request.use(
    (config) => {
        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
            config.headers['Authorization'] = `Bearer ${jwt_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;