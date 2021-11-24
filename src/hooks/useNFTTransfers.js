import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNFTTransfers = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId, walletAddress } = useMoralisDapp();
  const [NFTTransfers, setNFTTransfers] = useState([]);
  const {
    fetch: getNFTTransfers,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTTransfers, { chain: chainId, addess: walletAddress, token_address:"0x4c4a07f737bf57f6632b6cab089b78f62385acae", ...options });

  useEffect(() => data && setNFTTransfers(data?.result), [data]);
  console.log("transfers", NFTTransfers, chainId);
  return { getNFTTransfers, NFTTransfers, error, isLoading };
};
