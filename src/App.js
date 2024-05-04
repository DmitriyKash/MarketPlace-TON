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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
// import ProfilePage from './pages/ProfilePage';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import AdminPage from './pages/AdminPage';
import { CartProvider } from './pages/CartContext'; // Ensure this import is correct

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap all routes with CartProvider */}
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            {/* <Route path="/admin" element={<AdminPage />} /> */}
            {/* You can add other routes here */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;


