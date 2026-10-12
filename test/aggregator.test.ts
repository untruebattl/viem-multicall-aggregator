import { describe, it } from 'node:test';
import assert from 'node:assert';
import { MulticallBatchAggregator } from '../src/aggregator.js';

describe('MulticallBatchAggregator Unit Tests', () => {
  it('should split 250 calls into chunks of 100 correctly', () => {
    const items = Array.from({ length: 250 }, (_, i) => i);
    const chunks = MulticallBatchAggregator.chunkCalls(items, 100);

    assert.strictEqual(chunks.length, 3);
    assert.strictEqual(chunks[0].length, 100);
    assert.strictEqual(chunks[1].length, 100);
    assert.strictEqual(chunks[2].length, 50);
  });

  it('should format successful and failed results cleanly', () => {
    const raw = [
      { status: 'success' as const, result: 100n },
      { status: 'failure' as const, error: new Error('Execution reverted') },
    ];
    const formatted = MulticallBatchAggregator.formatResults<bigint>(raw);

    assert.strictEqual(formatted[0].status, 'success');
    assert.strictEqual(formatted[0].result, 100n);
    assert.strictEqual(formatted[1].status, 'failure');
  });
});
