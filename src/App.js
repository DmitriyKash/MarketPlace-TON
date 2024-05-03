import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar/Navbar';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TonConnectResponseHandler from './components/TonConnectResponseHandler'; // Убедитесь, что импортировали этот компонент

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://harmonious-fenglisu-6d5f55.netlify.app/tonconnect-manifest.json">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/path-for-ton-connect-response" element={<TonConnectResponseHandler />} />
                </Routes>
            </Router>
        </TonConnectUIProvider>
    );
}

export default App;
