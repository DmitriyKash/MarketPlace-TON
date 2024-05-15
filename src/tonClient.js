/* eslint-disable react-hooks/rules-of-hooks */
import { TonClient } from '@eversdk/core';
import { libWeb, libWebSetup } from '@eversdk/lib-web';

// Настройка URL для WASM модуля
libWebSetup({
    binaryURL: '/assets/eversdk.wasm',
});

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
  network: {
    endpoints: [process.env.REACT_APP_TON_ENDPOINT], // Используем переменную окружения для эндпоинта
    access_key: process.env.REACT_APP_TON_ACCESS_KEY, // Используем переменную окружения для access_key
  },
});

export default client;
