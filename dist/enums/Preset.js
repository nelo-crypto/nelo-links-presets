"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PRESET = [
    {
        name: 'Exchanges',
        presets: [
            {
                name: 'Binance',
                url: 'https://www.binance.com',
                description: 'Exchange',
            },
            {
                name: 'FTX',
                url: 'https://ftx.com/',
                description: 'Exchange',
            },
            {
                name: 'Kraken',
                url: 'https://www.kraken.com/',
                description: 'Exchange',
            },
            {
                name: 'Coinbase',
                url: 'https://www.coinbase.com/',
                description: 'Exchange',
            },
        ]
    },
    {
        name: 'Binance Smart Chain (DeFi)',
        presets: [
            {
                name: 'PancakeSwap',
                url: 'https://pancakeswap.finance/',
                description: 'DEX',
            },
            {
                name: 'Venus',
                url: 'https://venus.io/',
                description: 'Lending Market',
            },
            {
                name: '1inch',
                url: 'https://1inch.io',
                description: 'DEX',
            },
            {
                name: 'Biswap',
                url: 'https://biswap.org',
                description: 'DEX',
            },
            {
                name: 'Ellipsis Finance',
                url: 'https://ellipsis.finance',
                description: 'Stable DEX',
            },
            {
                name: 'MDEX',
                url: 'https://bsc.mdex.com/',
                description: 'DEX',
            }
        ]
    }
];
exports.default = PRESET;
