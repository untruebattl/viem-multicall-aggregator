import { MulticallBatchAggregator } from './aggregator.js';

console.log('⚡ [Viem Multicall Aggregator] Initializing batch reader...');

const mockCalls = Array.from({ length: 250 }, (_, i) => ({
  id: `call-${i}`,
  target: '0x38129cf4CE5E183eFF248F42A7D345Bb1B47621A',
  method: 'balanceOf',
}));

const batches = MulticallBatchAggregator.chunkCalls(mockCalls, 100);
console.log(`📦 Batched ${mockCalls.length} contract calls into ${batches.length} Multicall3 chunks.`);

batches.forEach((b, idx) => {
  console.log(`  - Chunk ${idx + 1}: ${b.length} calls`);
});
