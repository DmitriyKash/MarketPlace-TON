/* eslint-disable react-hooks/rules-of-hooks */
// import { TonClient } from '@eversdk/core';
// import { libWeb, libWebSetup } from '@eversdk/lib-web';

// // Настройка альтернативного URL для WASM модуля
// libWebSetup({
//     binaryURL: '/assets/eversdk.wasm', // Путь к WASM файлу
// });

// TonClient.useBinaryLibrary(libWeb);

// const client = new TonClient({
//     network: {
//         endpoints: ['https://test.ton.dev'], // Для тестовой сети
//     },
// });

// export default client;





import { TonClient } from '@eversdk/core';
import { libWeb, libWebSetup } from '@eversdk/lib-web';

// Настройка URL для WASM модуля
libWebSetup({
    binaryURL: '/assets/eversdk.wasm',
});

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({
  network: {
    endpoints: ['https://mainnet.evercloud.dev/cd7307b544b74dd0abe0330814e51d6c/graphql'], // Замените YOUR_PROJECT_ID на ваш реальный проект ID
    access_key: '93472d702aec4563b1f395e88686e7e4', // Замените YOUR_ACCESS_KEY на ваш реальный API ключ
  },
});

export default client;

