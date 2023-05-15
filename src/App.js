import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Filters from './components/FilterPanel';
import ArticleList from './components/ArticleList';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import PreferencesForm from './components/PreferencesForm';
import LoadingScreen from './components/LoadingScreen';
import UserContext from './UserContext';
import PreferencesContext from './PreferencesContext';
import useFetchArticles from './useFetchArticles';

const App = () => {
    const { user } = useContext(UserContext);
    const { preferences } = useContext(PreferencesContext);
    const [searchFilters, setSearchFilters] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { articles } = useFetchArticles(preferences, searchFilters, setIsLoading);

    const [searchTerm, setSearchTerm] = useState('');

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <Router>
            <div className="App">
                {isLoading && <LoadingScreen />}
                <Header />
                <main className="container mt-4">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <SearchBar
                                        onSearch={(searchTerm) => {
                                            setSearchFilters({ ...searchFilters, searchTerm });
                                            setSearchTerm(searchTerm);
                                        }}
                                        onClearSearch={clearSearch}
                                    />
                                    <Filters
                                        onFilter={(filters) => setSearchFilters({ ...searchFilters, ...filters })}
                                        setLoading={(loading) => setIsLoading(loading)}
                                        onClearSearch={clearSearch} // Add this prop
                                    />
                                    <ArticleList articles={articles} />
                                </>
                            }
                        />
                        <Route
                            path="/login"
                            element={user ? <Navigate to="/" /> : <Login />}
                        />
                        <Route
                            path="/register"
                            element={user ? <Navigate to="/" /> : <Register />}
                        />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/preferences" element={<PreferencesForm />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
