import { Abi } from 'viem';

export interface ContractCallDef<TAbi extends Abi = Abi> {
  address: `0x${string}`;
  abi: TAbi;
  functionName: string;
  args?: readonly unknown[];
}

export interface MulticallBatchResult<T = unknown> {
  status: 'success' | 'failure';
  result?: T;
  error?: Error;
}
