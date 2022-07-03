"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlockExplorer_1 = __importDefault(require("./Blockchain/BlockExplorer"));
const Tenset_1 = __importDefault(require("./Blockchain/Tenset"));
const PRESET = [
    {
        name: 'NeloCrypto Apps',
        presets: [
            {
                name: 'NeloMaths',
                url: 'https://maths.nelocrypto.com',
                description: 'NeloMaths is a collection of crypto related calculators to help you keep on top of things.',
            },
            {
                name: 'NeloOverview',
                url: 'https://overview.nelocrypto.com',
                description: 'NeloOverview is a crypto wealth manager to track your entire networth across every blockchain in real time.',
            },
            {
                name: 'NeloVaults',
                url: 'https://vaults.nelocrypto.com',
                description: 'NeloVaults is a vault frontend manager for your private vaults and most called EVM contracts.',
            },
        ]
    },
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
            },
        ]
    },
    {
        name: 'Star Atlas',
        presets: [
            {
                name: 'Star Atlas Twitter',
                url: 'https://twitter.com/staratlas',
                description: 'Twitter page',
            },
            {
                name: 'Star Atlas Telegram',
                url: 'https://t.me/staratlasgame',
                description: 'Telegram chat',
            },
            {
                name: 'Discord',
                url: 'https://discord.com/invite/cg9aWnsuCA',
                description: 'Discord chat',
            },
            {
                name: 'ATLAS CG Page',
                url: 'https://www.coingecko.com/en/coins/star-atlas',
                description: 'ATLAS CG page',
            },
            {
                name: 'POLIS CG Page',
                url: 'https://www.coingecko.com/en/coins/star-atlas-dao',
                description: 'Stable DEX',
            },
        ]
    },
    {
        name: 'Block Explorers',
        presets: [
            BlockExplorer_1.default.HECO,
            BlockExplorer_1.default.AURORA,
            BlockExplorer_1.default.FTM,
            BlockExplorer_1.default.BSC,
            BlockExplorer_1.default.ETH,
            BlockExplorer_1.default.ONE,
            BlockExplorer_1.default.ARBITRUM,
            BlockExplorer_1.default.AVAX,
            BlockExplorer_1.default.METIS,
            BlockExplorer_1.default.CRONOS,
        ]
    },
    Tenset_1.default
];
exports.default = PRESET;
