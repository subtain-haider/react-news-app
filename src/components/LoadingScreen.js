import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

const LoadingScreen = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <MDBSpinner color="primary" />
        </div>
    );
};

export default LoadingScreen;
