// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import client from '../../tonClient';

// const TransactionForm = () => {
//     const [toAddress, setToAddress] = useState('');
//     const [amount, setAmount] = useState('');
//     const [message, setMessage] = useState('');
//     const [status, setStatus] = useState('');
//     const location = useLocation();
//     const { title, price } = location.state || {};

//     useEffect(() => {
//         if (price) {
//             setAmount(price.toString());
//         }
//     }, [price]);

//     const handleSendTransaction = async () => {
//         try {
//             setStatus('Отправка транзакции...');

//             // Convert address to the proper format
//             const toAddressConverted = (await client.utils.convert_address({
//                 address: toAddress,
//                 output_format: {
//                     type: 'Hex',
//                 },
//             })).address;

//             // Prepare message body
//             const transferAbi = {
//                 type: 'FunctionCall',
//                 value: {
//                     function_name: 'transfer',
//                     input: {
//                         comment: message,
//                     },
//                 },
//             };

//             // Prepare payload
//             const payload = {
//                 abi: {
//                     type: 'Contract',
//                     value: transferAbi,
//                 },
//                 address: toAddressConverted,
//                 call_set: {
//                     function_name: 'sendTransaction',
//                     input: {
//                         dest: toAddressConverted,
//                         value: parseInt(amount, 10),
//                         bounce: false,
//                         flags: 0,
//                         payload: '',
//                     },
//                 },
//                 signer: {
//                     type: 'None',
//                 },
//             };

//             // Send the transaction
//             const result = await client.processing.process_message({
//                 message_encode_params: payload,
//                 send_events: false,
//             });

//             setStatus(`Транзакция успешно отправлена. Результат: ${JSON.stringify(result)}`);
//         } catch (error) {
//             setStatus(`Ошибка при отправке транзакции: ${error.message}`);
//         }
//     };

//     return (
//         <div>
//             <h2>Отправить Транзакцию для {title}</h2>
//             <input
//                 type="text"
//                 placeholder="Адрес получателя"
//                 value={toAddress}
//                 onChange={(e) => setToAddress(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Сумма"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Сообщение (опционально)"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={handleSendTransaction}>Отправить</button>
//             <p>{status}</p>
//         </div>
//     );
// };

// export default TransactionForm;

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
            console.log('Starting transaction...');

            // Преобразование адреса в формат Hex
            const toAddressConverted = (await client.utils.convert_address({
                address: toAddress,
                output_format: {
                    type: 'Hex',
                },
            })).address;
            console.log('Converted Address:', toAddressConverted);

            // Подготовка вызова функции
            const payload = {
                abi: {
                    type: 'Contract',
                    value: {
                        "ABI version": 2,
                        functions: [
                            {
                                name: 'sendTransaction',
                                inputs: [
                                    { name: 'dest', type: 'address' },
                                    { name: 'value', type: 'uint128' },
                                    { name: 'bounce', type: 'bool' },
                                    { name: 'flags', type: 'uint8' },
                                    { name: 'payload', type: 'cell' },
                                ],
                                outputs: [],
                            },
                        ],
                        data: [],
                        events: [],
                    },
                },
                address: toAddressConverted,
                call_set: {
                    function_name: 'sendTransaction',
                    input: {
                        dest: toAddressConverted,
                        value: parseInt(amount, 10),
                        bounce: false,
                        flags: 3,
                        payload: message,
                    },
                },
                signer: { type: 'None' },
            };

            console.log('Payload:', payload);

            // Отправка транзакции
            const result = await client.processing.process_message({
                message_encode_params: payload,
                send_events: false,
            });

            console.log('Transaction result:', result);
            setStatus(`Транзакция успешно отправлена. Результат: ${JSON.stringify(result)}`);
        } catch (error) {
            console.error('Transaction error:', error);
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



