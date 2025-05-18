import { PublicKey } from "@solana/web3.js";

/**
 * Validate token name
 */
export const validateTokenName = (name) => {
  if (!name) return "Token name is required";
  if (name.length < 2) return "Token name must be at least 2 characters";
  if (name.length > 50) return "Token name must be less than 50 characters";
  return null;
};

/**
 * Validate token symbol
 */
export const validateTokenSymbol = (symbol) => {
  if (!symbol) return "Token symbol is required";
  if (symbol.length < 2) return "Token symbol must be at least 2 characters";
  if (symbol.length > 8) return "Token symbol must be less than 8 characters";
  const symbolRegex = /^[A-Za-z0-9]+$/;
  if (!symbolRegex.test(symbol))
    return "Token symbol must only contain letters and numbers";
  return null;
};

/**
 * Validate token supply
 */
export const validateTokenSupply = (supply) => {
  if (!supply) return "Token supply is required";
  if (isNaN(Number(supply))) return "Token supply must be a number";
  if (Number(supply) <= 0) return "Token supply must be greater than 0";
  if (Number(supply) > Number.MAX_SAFE_INTEGER)
    return "Token supply is too large";
  return null;
};

/**
 * Validate token decimals
 */
export const validateTokenDecimals = (decimals) => {
  if (decimals === undefined || decimals === null)
    return "Token decimals is required";
  if (isNaN(Number(decimals))) return "Token decimals must be a number";
  if (Number(decimals) < 0)
    return "Token decimals must be greater than or equal to 0";
  if (Number(decimals) > 9)
    return "Token decimals must be less than or equal to 9";
  if (!Number.isInteger(Number(decimals)))
    return "Token decimals must be an integer";
  return null;
};

/**
 * Validate a Solana address
 */
export const validateSolanaAddress = (address) => {
  if (!address) return "Address is required";
  try {
    new PublicKey(address);
    return null;
  } catch (error) {
    return "Invalid Solana address";
  }
};

/**
 * Format a Solana address for display
 */
export const formatAddress = (address, length = 4) => {
  if (!address) return "";
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};

/**
 * Validate URL
 */
export const validateUrl = (url) => {
  if (!url) return null; // URL is optional
  try {
    new URL(url);
    return null;
  } catch (error) {
    return "Invalid URL";
  }
};
