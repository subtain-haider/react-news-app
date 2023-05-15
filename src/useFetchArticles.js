import { useState, useEffect } from 'react';
import { fetchArticles } from './api';

const useFetchArticles = (preferences, searchFilters, setIsLoading) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchFilteredArticles = async () => {
            const response = await fetchArticles({ ...preferences, ...searchFilters });
            if (response.data) {
                setArticles(response.data);
            }
            setIsLoading(false);
        };
        fetchFilteredArticles();
    }, [preferences, searchFilters, setIsLoading]);

    return { articles, setArticles };
};

export default useFetchArticles;
