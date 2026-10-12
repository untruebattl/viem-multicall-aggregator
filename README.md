# Viem Multicall Aggregator ⚡

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Viem](https://img.shields.io/badge/Web3-Viem-purple)
![Multicall3](https://img.shields.io/badge/Protocol-Multicall3-emerald)
![License](https://img.shields.io/badge/License-MIT-green)

An enterprise-grade, high-throughput **Batch Multicall3 Aggregator & Contract State Reader** built for EVM networks and Kite Blockchain using `viem`.

---

## 🌟 Key Features

- **Automatic Request Batching**: Efficiently chunks thousands of contract view requests into bounded Multicall3 envelopes to prevent RPC payload timeouts.
- **Strict Error Isolation**: Gracefully isolates individual reverted calls without failing the entire batch (`allowFailure: true`).
- **End-to-End Type Safety**: Leverages TypeScript generics and ABIs for inferred response parsing.

---

## 🚀 Quick Start

```bash
git clone https://github.com/untruebattl/viem-multicall-aggregator.git
cd viem-multicall-aggregator
npm install
npm run build
npm start
```

### Run Tests

```bash
npm test
```

---

## 📄 License

MIT
