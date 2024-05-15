import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
  network: {
    endpoints: ['https://main.ton.dev'], // Укажите ваши эндпоинты
  },
});

export default client;
