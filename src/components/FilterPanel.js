import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';

const FilterPanel = ({ onFilter, setLoading, onClearSearch }) => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [category, setCategory] = useState('');
    const [source, setSource] = useState('');

    const categories = [
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology',
    ];

    const sources = [
        'NewsAPIService',
        'GuardianService',
        'NewYorkTimesService',
    ];

    const handleFilter = (e) => {
        e.preventDefault();
        setLoading(true);
        onFilter({ fromDate, toDate, category, source });
    };

    const handleClearFilter = (e) => {
        e.preventDefault();
        setLoading(true);
        setFromDate('');
        setToDate('');
        setCategory('');
        setSource('');
        onFilter({
            fromDate: '',
            toDate: '',
            category: '',
            source: '',
            searchTerm: '',
        });
        onClearSearch();
    };

    return (
        <MDBContainer className="my-4">
            <form onSubmit={handleFilter}>
                <label className="mx-2">
                    From:
                    <MDBInput type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                    To:
                    <MDBInput type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <label className="mx-2">
                    Category:
                    <select className="browser-default custom-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Source:
                    <select className="browser-default custom-select" value={source} onChange={(e) => setSource(e.target.value)}>
                        <option value="">Select Source</option>
                        {sources.map((src) => (
                            <option key={src} value={src}>
                                {src}
                            </option>
                        ))}
                    </select>
                </label>
                <MDBBtn className="mx-2" type="submit" color="primary">Filter</MDBBtn>
                <MDBBtn onClick={handleClearFilter} color="secondary">Clear Filter</MDBBtn>
            </form>
        </MDBContainer>
    );
};

export default FilterPanel;
