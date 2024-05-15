import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import client from '../../tonClient';

const TransactionForm = () => {
    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const location = useLocation();
    const { title, price } = location.state || {};

    useEffect(() => {
        if (price) {
            setAmount(price.toString());
        }
    }, [price]);

    const handleSendTransaction = async () => {
        try {
            setStatus('Отправка транзакции...');
            const result = await client.transfer({
                to: toAddress,
                value: parseFloat(amount), // Убедитесь, что число корректно преобразуется
                payload: message,
            });
            setStatus(`Транзакция успешно отправлена. Результат: ${JSON.stringify(result)}`);
        } catch (error) {
            setStatus(`Ошибка при отправке транзакции: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Отправить Транзакцию для {title}</h2>
            <input
                type="text"
                placeholder="Адрес получателя"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Сумма"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="Сообщение (опционально)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendTransaction}>Отправить</button>
            <p>{status}</p>
        </div>
    );
};

export default TransactionForm;
