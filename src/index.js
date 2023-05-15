import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './UserContext';
import { PreferencesProvider } from './PreferencesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <UserProvider>
                <PreferencesProvider>
                    <App />
                </PreferencesProvider>
            </UserProvider>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
