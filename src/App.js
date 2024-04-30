import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar/Navbar';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://master--harmonious-fenglisu-6d5f55.netlify.app/tonconnect-manifest.json">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </Router>
        </TonConnectUIProvider>
    );
}

export default App;
