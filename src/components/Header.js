import React, { useContext } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarLink,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

const Header = () => {
    const { user, isLoading } = useContext(UserContext);

    if (isLoading) {
        return (
            // Render a loading indicator or an empty header here
            <p>Loading...</p>
        );
    }

    return (
        // Your existing header code
        <MDBNavbar expand="lg" dark bgColor="primary">
            <MDBContainer fluid>
                <MDBNavbarBrand>
                    <Link className="text-decoration-none text-reset" to="/">
                        News Aggregator
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarNav className="ms-auto">
                    <MDBNavbarLink>
                        <Link className="text-decoration-none text-reset" to="/">
                            Home
                        </Link>
                    </MDBNavbarLink>
                    {!user && (
                        <>
                            <MDBNavbarLink>
                                <Link className="text-decoration-none text-reset" to="/login">
                                    Login
                                </Link>
                            </MDBNavbarLink>
                            <MDBNavbarLink>
                                <Link className="text-decoration-none text-reset" to="/register">
                                    Register
                                </Link>
                            </MDBNavbarLink>
                        </>
                    )}
                    {user && (
                        <>
                            <MDBNavbarLink>
                                <Link className="text-decoration-none text-reset" to="/preferences">
                                    Preferences
                                </Link>
                            </MDBNavbarLink>
                            <MDBNavbarLink>
                                <Link className="text-decoration-none text-reset" to="/logout">
                                    Logout
                                </Link>
                            </MDBNavbarLink>
                        </>
                    )}
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Header;
