"use client";

import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createWallet = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/wallet");
      const data = await response.json();

      if (data.success) {
        setWalletAddress(data.smartWalletAddress);
      } else {
        setError(data.error || "Failed to create wallet");
      }
    } catch (err) {
      setError("An error occurred while creating the wallet");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Coinbase Smart Wallet
        </h1>

        <div className="w-full">
          <button
            onClick={createWallet}
            disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating..." : "Create Smart Wallet"}
          </button>
        </div>

        {error && (
          <div className="w-full p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        {walletAddress && (
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Smart Wallet Created!
            </h2>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm font-mono break-all text-gray-800 dark:text-gray-200">
                {walletAddress}
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Powered by Coinbase SDK
      </footer>
    </div>
  );
}
