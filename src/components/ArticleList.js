import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles = [] }) => {
    return (
        <div className="row">
            {articles.map((article) => (
                <div className="col-md-4" key={article.id}>
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    );
};


export default ArticleList;
