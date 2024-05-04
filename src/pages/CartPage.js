import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Make sure this path is correct
import Navigation from './Navigation'; // Assuming Navigation is a separate component

function CartPage() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCart(); // Ensure removeFromCart is included
  
    const goToCheckout = () => {
      navigate('/checkout', { state: { cartItems } }); // Passing state like this is not necessary since you use CartContext
    };

    // Calculate total cost
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <header>
                <h1>Корзина</h1>
                <Navigation />
            </header>
            <main>
                <section>
                    <h2>Ваша корзина</h2>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>Цена: ${item.price}</p>
                                <p>Количество: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <h3>Общая стоимость: ${totalCost}</h3>
                    </div>
                    <button onClick={goToCheckout}>Proceed to Checkout</button>
                </section>
            </main>
            <footer>
                <p>© 2024 TON Marketplace. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CartPage;
