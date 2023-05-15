import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../api';
import ArticleList from './ArticleList';

const NewsFeed = () => {
    const user = useSelector((state) => state.user);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await getArticles(user.preferred_sources, user.preferred_categories, user.preferred_authors);
            setArticles(response.data);
        };

        fetchArticles();
    }, [user]);

    return <ArticleList articles={articles} />;
};

export default NewsFeed;
