import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface WalletAddressFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export const WalletAddressField: React.FC<WalletAddressFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  const [mode, setMode] = useState<"manual" | "wallet">("manual");
  const { publicKey } = useWallet();

  useEffect(() => {
    if (mode === "wallet" && publicKey) {
      onChange(publicKey.toBase58());
    }
  }, [mode, publicKey]);

  return (
    <div className="flex flex-col gap-2 border border-gray-700 rounded-lg p-3 bg-gray-700/50">
      <div className="flex justify-between items-center">
        <label className="text-sm text-gray-200">{label}</label>
        <div className="flex gap-2 text-sm">
          <button
            className={`px-2 py-1 rounded-md ${
              mode === "manual" ? "bg-purple-600 text-white" : "bg-gray-600"
            }`}
            onClick={() => setMode("manual")}
          >
            Manual
          </button>
          <button
            className={`px-2 py-1 rounded-md ${
              mode === "wallet" ? "bg-purple-600 text-white" : "bg-gray-600"
            }`}
            onClick={() => setMode("wallet")}
          >
            Wallet
          </button>
        </div>
      </div>

      {mode === "manual" ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter wallet address"
          className="w-full bg-gray-800 border border-gray-600 rounded-md text-white p-2"
        />
      ) : (
        <div className="flex justify-between items-center">
          <WalletMultiButton className="!bg-purple-600 !rounded-md" />
          {publicKey && (
            <span className="text-xs text-gray-400 truncate max-w-[140px]">
              {publicKey.toBase58()}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

