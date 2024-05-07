import { TonClient } from 'ton-web-js';

// Настроить клиента с вашим конечным URL для работы с блокчейном
const client = new TonClient({
    endpoint: 'https://your-endpoint',
});

export default client;