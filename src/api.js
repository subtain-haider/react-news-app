import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost/api/',
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const register = async (userData) => {
    try {
        const response = await API.post('/register', userData);
        return { data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 422) {
            const errors = error.response.data.errors;
            return { errors };
        } else {
            // Handle other errors, like network issues or server errors
            console.error('An error occurred while registering:', error);
            return { errors: { email: 'An error occurred', password: 'An error occurred', name: 'An error occurred', password_confirmation: 'An error occurred' } };
        }
    }
};

export const login = async (credentials) => {
    try {
        const response = await API.post('/login', credentials);
        return { data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 401) {
            const errors = error.response.data.error
                ? { email: error.response.data.error, password: error.response.data.error }
                : { email: 'Invalid credentials', password: 'Invalid credentials' };
            return { errors };
        } else {
            // Handle other errors, like network issues or server errors
            console.error('An error occurred while logging in:', error);
            return { errors: { email: 'An error occurred', password: 'An error occurred' } };
        }
    }
};

export const logout = async () => {
    localStorage.removeItem('token');
};

export const getArticles = async (sources, categories, authors) => {
    try {
        const response = await API.get('/articles', {
            params: { sources, categories, authors },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
};

export const updatePreferences = async (preferredSources, preferredCategories, preferredAuthors) => {
    const response = await fetch('/api/preferences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({ preferred_sources: preferredSources, preferred_categories: preferredCategories, preferred_authors: preferredAuthors })
    });

    if (!response.ok) {
        throw new Error('Failed to update preferences');
    }
};

export const getUser = async (token) => {
    try {
        const response = await API.get('/user', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return { data: response.data };
    } catch (error) {
        console.error(error);
        return { errors: error.response.data.errors };
    }
};

export const fetchArticles = async (filters) => {
    try {
        const response = await API.get('/articles', {
            params: filters,
        });
        return { data: response.data };
    } catch (error) {
        console.error(error);
        return { errors: error.response.data.errors };
    }
};




export default API;
