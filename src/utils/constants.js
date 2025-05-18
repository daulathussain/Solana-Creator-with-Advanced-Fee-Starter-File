const WALLET_COMMISSION = process.env.NEXT_PUBLIC_COMMISSION_WALLET;
const ACTIVE_NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK;
const FEE = process.env.NEXT_PUBLIC_TOKEN_CREATION_FEE;
const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL;

export const COMMISSION_WALLET = WALLET_COMMISSION;
// TOKEN_CREATION_FEE and COMMISSION_FEE represent the default commission (0.1 SOL) you will receive when a user creates a token, so just keep the veriable as it is
export const TOKEN_CREATION_FEE = 0.1; // SOL
export const COMMISSION_FEE = 0.1; // SOL
export const NETWORKS = {
  mainnet: {
    name: "Mainnet Beta",
    endpoint: MAINNET_RPC_URL,
    chainId: "mainnet-beta",
  },
  devnet: {
    name: "Devnet",
    endpoint: "https://api.devnet.solana.com",
    chainId: "devnet",
  },
  testnet: {
    name: "Testnet",
    endpoint: "https://api.testnet.solana.com",
    chainId: "testnet",
  },
};

export const SOLANA_EXPLORERS = {
  mainnet: "https://explorer.solana.com",
  devnet: "https://explorer.solana.com/?cluster=devnet",
  testnet: "https://explorer.solana.com/?cluster=testnet",
};

export const MIN_TOKEN_DECIMALS = 0;
export const MAX_TOKEN_DECIMALS = 9;
export const DEFAULT_TOKEN_DECIMALS = 6;

export const TOKEN_STEPS = [
  { id: 1, name: "Connect Wallet" },
  { id: 2, name: "Token Details" },
  { id: 3, name: "Social Links" },
  { id: 4, name: "Authority Options" },
];
