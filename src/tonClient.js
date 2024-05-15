/* eslint-disable react-hooks/rules-of-hooks */
import { TonClient } from '@eversdk/core';
import { libWeb, libWebSetup } from '@eversdk/lib-web';

// Настройка альтернативного URL для WASM модуля
libWebSetup({
    binaryURL: '/assets/eversdk_1_30_1.wasm', // Путь к WASM файлу
});

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
    network: {
        endpoints: ['https://test.ton.dev'], // Для тестовой сети
    },
});

export default client;
