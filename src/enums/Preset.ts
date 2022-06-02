import IPresetCategory from '../interfaces/IPresetCategory'

const PRESET: IPresetCategory[] = [
    {
        name: 'Exchanges',
        presets: [
            {
                name: 'Binance',
                url: 'https://www.binance.com',
            },
            {
                name: 'FTX',
                url: 'https://ftx.com/',
            },
            {
                name: 'Kraken',
                url: 'https://www.kraken.com/',
            },
        ]
    }
]

export default PRESET
