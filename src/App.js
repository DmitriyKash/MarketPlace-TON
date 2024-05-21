// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import Navbar from './components/Navbar/Navbar';
// import { TonConnectUIProvider } from '@tonconnect/ui-react';

// function App() {
//     return (
//         <TonConnectUIProvider manifestUrl="https://harmonious-fenglisu-6d5f55.netlify.app/tonconnect-manifest.json">
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/product/:id" element={<ProductPage />} />
//                 </Routes>
//             </Router>
//         </TonConnectUIProvider>
//     );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductDetails from'./components/ProductDetails/ProductDetails';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { CartProvider } from './pages/CartContext';
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
        <CartProvider> {/* Wrap all routes with CartProvider */}
            <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/transaction" element={<TransactionForm />} />
            </Routes>
            </div>
        </CartProvider>
        </ProductProvider>
        </AuthProvider>
        </Router>
    </TonConnectUIProvider>
  );
}

export default App;


