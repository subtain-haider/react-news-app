import React, { useContext, useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PreferencesContext from '../PreferencesContext';

const PreferencesForm = () => {
    const { preferences, setPreferences } = useContext(PreferencesContext);
    const [sources, setSources] = useState((preferences.sources || []).join(', '));
    const [categories, setCategories] = useState((preferences.categories || []).join(', '));
    const [authors, setAuthors] = useState((preferences.authors || []).join(', '));

    const handleSubmit = (e) => {
        e.preventDefault();
        setPreferences({
            sources: sources.split(',').map((s) => s.trim()),
            categories: categories.split(',').map((c) => c.trim()),
            authors: authors.split(',').map((a) => a.trim()),
        });
    };

    return (
        <MDBContainer>
            <form onSubmit={handleSubmit}>
                <MDBRow className="mb-3">
                    <MDBCol>
                        <MDBInput
                            label="Sources"
                            type="text"
                            value={sources}
                            onChange={(e) => setSources(e.target.value)}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                    <MDBCol>
                        <MDBInput
                            label="Categories"
                            type="text"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                    <MDBCol>
                        <MDBInput
                            label="Authors"
                            type="text"
                            value={authors}
                            onChange={(e) => setAuthors(e.target.value)}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBBtn type="submit">Save Preferences</MDBBtn>
            </form>
        </MDBContainer>
    );
};

export default PreferencesForm;
