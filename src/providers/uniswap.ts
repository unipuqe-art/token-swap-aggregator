```typescript
/**
 * Uniswap service to fetch swap rates from the Uniswap DEX.
 */
import axios from 'axios';

interface UniswapQuoteResponse {
  quote: {
    amountIn: string;
    amountOutMin: string;
    sqrtPriceX96After: number;
    path: string[];
    feeAmount: number;
  };
}

/**
 * Fetches the swap rate for a given token pair on Uniswap.
 *
 * @param {string} tokenIn - The address of the input token.
 * @param {string} tokenOut - The address of the output token.
 * @param {number} amountIn - The amount of input token to swap.
 * @returns {Promise<UniswapQuoteResponse>} The swap quote from Uniswap.
 */
export async function getUniswapSwapRate(
  tokenIn: string,
  tokenOut: string,
  amountIn: number
): Promise<UniswapQuoteResponse> {
  try {
    const response = await axios.get('https://api.uniswap.org/v3/quote', {
      params: {
        sellToken: tokenIn,
        buyToken: tokenOut,
        sellAmount: amountIn.toString(),
        slippageTolerance: '0.05',
        takerFeePercentages: '0',
        recipient: '0xYourRecipientAddress',
        referrer: '0xYourReferrerAddress'
      }
    });

    return response.data as UniswapQuoteResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Uniswap API error: ${error.response?.data.message}`);
    } else {
      throw new Error('Failed to fetch Uniswap swap rate');
    }
  }
}
```