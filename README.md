# token-swap-aggregator

[![Build Status](https://github.com/kaisilva/token-swap-aggregator/actions/workflows/ci.yml/badge.svg)](https://github.com/kaisilva/token-swap-aggregator/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://badge.fury.io/js/@kaisilva%2Ftoken-swap-aggregator.svg)](https://www.npmjs.com/package/@kaisilva/token-swap-aggregator)

## Description

DEX aggregator comparing swap rates across Uniswap, SushiSwap, and Curve. TypeScript SDK.

## Features
- Compare swap rates between major decentralized exchanges.
- Get the best possible token swap rate using multiple DEXs.
- Written in TypeScript for type safety and maintainability.

## Installation

### npm

```bash
npm install @kaisilva/token-swap-aggregator
```

### pypi

```bash
pip install token-swap-aggregator==1.0.0
```

## Usage

Here's a quick example of how to use the `token-swap-aggregator`:

```typescript
import { TokenSwapAggregator } from '@kaisilva/token-swap-aggregator';

const aggregator = new TokenSwapAggregator();

async function getBestSwapRate() {
  const rate = await aggregator.getBestSwapRate('ETH', 'USDT');
  console.log(`Best swap rate: ${rate}`);
}

getBestSwapRate();
```

## Tech Stack

- TypeScript
- JavaScript (for compatibility with Node.js and browsers)
- Uniswap SDK
- SushiSwap SDK
- Curve SDK

## Project Structure

```plaintext
token-swap-aggregator/
├── src/
│   ├── index.ts
│   ├── aggregators/
│   │   ├── uniswapAggregator.ts
│   │   ├── sushiSwapAggregator.ts
│   │   └── curveAggregator.ts
│   ├── types.ts
│   └── utils.ts
├── tests/
│   ├── index.test.ts
│   ├── aggregators/
│   │   ├── uniswapAggregator.test.ts
│   │   ├── sushiSwapAggregator.test.ts
│   │   └── curveAggregator.test.ts
│   └── types.test.ts
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to improve the project.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.