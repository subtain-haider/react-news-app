import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';

const ArticleCard = ({ article }) => {
    return (
        <MDBCard className="mb-4">
            <MDBCardImage src={article.urlToImage} alt={article.title} position="top" />
            <MDBCardBody>
                <MDBCardTitle>{article.title}</MDBCardTitle>
                <MDBCardText>
                    <small>{article.publishedAt}</small>
                    <br/>

                    {article.description}
                </MDBCardText>
                <MDBCardLink href={article.url} target="_blank">Read More</MDBCardLink>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ArticleCard;
