import { MulticallBatchResult } from './types.js';

export class MulticallBatchAggregator {
  public static chunkCalls<T>(calls: T[], chunkSize = 100): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < calls.length; i += chunkSize) {
      chunks.push(calls.slice(i, i + chunkSize));
    }
    return chunks;
  }

  public static formatResults<T>(rawOutputs: { status: 'success' | 'failure'; result?: unknown; error?: Error }[]): MulticallBatchResult<T>[] {
    return rawOutputs.map((item) => {
      if (item.status === 'success') {
        return { status: 'success', result: item.result as T };
      }
      return { status: 'failure', error: item.error || new Error('Reverted') };
    });
  }
}
