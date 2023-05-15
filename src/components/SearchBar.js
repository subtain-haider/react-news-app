import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const SearchBar = ({ onSearch, handleClearSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setSearchTerm('');
    }, [handleClearSearch]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="d-flex">
            <MDBContainer >
                <MDBRow>
                    <MDBCol size='10'>
                        <MDBInput type='search' label='Search articles' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </MDBCol>
                    <MDBCol size='2'>
                        <MDBBtn type="submit" color="success">Search</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    );
};

export default SearchBar;
