import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <MDBContainer className="p-4">
                <MDBRow>
                    <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">News Aggregator</h5>
                        <p>
                            Your one-stop source for the latest news from various sources.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} News Aggregator. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
