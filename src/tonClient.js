import { TonClient } from 'ton-web-js';

// Настроить клиента с вашим конечным URL для работы с блокчейном
const client = new TonClient({
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
});

export default client;