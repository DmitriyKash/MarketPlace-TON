import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductDetails from'./components/ProductDetails/ProductDetails';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import AuthProvider from './components/AuthContext/AuthContext';
import { ProductProvider } from './components/ProductContext/ProductContext';



function App() {
  useEffect(() => {
    console.log('Initializing Telegram Web App...');
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    } else {
      console.error('Telegram Web App not found');
    }
  }, []);



  return (
    <TonConnectUIProvider manifestUrl="https://harmonious-fenglisu-6d5f55.netlify.app/tonconnect-manifest.json">
        <Router>
        <AuthProvider>
          <ProductProvider>
            <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/transaction" element={<TransactionForm />} />
            </Routes>
            </div>
        </ProductProvider>
        </AuthProvider>
        </Router>
    </TonConnectUIProvider>
  );
}

export default App;


