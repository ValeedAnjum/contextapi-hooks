import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import BookContext  from './contexts/BookContext';
import BookContextProvider from './contexts/BookContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar/>
                    <BookContextProvider>
                        <BookList/>
                    </BookContextProvider>
                    <ToggleTheme/>
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
