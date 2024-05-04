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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPage from './pages/AdminPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/admin" component={AdminPage} />

          {/* Добавьте другие маршруты здесь */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

