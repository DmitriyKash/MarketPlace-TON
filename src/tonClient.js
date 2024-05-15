/* eslint-disable react-hooks/rules-of-hooks */
import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
  network: {
    // endpoints: ['https://main.ton.dev'], // Для основной сети
    endpoints: ['https://test.ton.dev'], // Для тестовой сети
  },
});

// Функция для проверки соединения
const checkConnection = async () => {
  try {
    const result = await client.net.query_collection({
      collection: 'blocks_signatures',
      filter: {},
      result: 'id',
      limit: 1,
    });
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  }
};

checkConnection();

export default client;
