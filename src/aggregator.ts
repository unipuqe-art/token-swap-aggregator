```typescript
/**
 * @file aggregator.ts
 * @description Token swap aggregator comparing rates across Uniswap, SushiSwap, and Curve.
 */

import { ethers } from 'ethers';
import { UniswapV2Aggregator } from './uniswap-v2-aggregator';
import { SushiSwapAggregator } from './sushi-swap-aggregator';
import { CurveAggregator } from './curve-aggregator';

/**
 * TokenSwapAggregator class to aggregate swap rates from different DEXes.
 */
export class TokenSwapAggregator {
  private uniswapV2: UniswapV2Aggregator;
  private sushiSwap: SushiSwapAggregator;
  private curve: CurveAggregator;

  constructor(provider: ethers.providers.Provider) {
    this.uniswapV2 = new UniswapV2Aggregator(provider);
    this.sushiSwap = new SushiSwapAggregator(provider);
    this.curve = new CurveAggregator(provider);
  }

  /**
   * Aggregates swap rates for a given token pair across all supported DEXes.
   * @param fromToken Address of the source token.
   * @param toToken Address of the destination token.
   * @param amount Amount of source tokens to swap.
   * @returns An object containing swap rates from different DEXes.
   */
  async aggregateSwapRates(fromToken: string, toToken: string, amount: ethers.BigNumber): Promise<{ uniswapV2: number; sushiSwap: number; curve: number }> {
    try {
      const uniswapV2Rate = await this.uniswapV2.getSwapRate(fromToken, toToken, amount);
      const sushiSwapRate = await this.sushiSwap.getSwapRate(fromToken, toToken, amount);
      const curveRate = await this.curve.getSwapRate(fromToken, toToken, amount);

      return { uniswapV2: uniswapV2Rate, sushiSwap: sushiSwapRate, curve: curveRate };
    } catch (error) {
      console.error('Error aggregating swap rates:', error);
      throw new Error('Failed to aggregate swap rates');
    }
  }
}
```