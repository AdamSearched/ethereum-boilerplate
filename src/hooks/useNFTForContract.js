//this hook is getting the NFTs for the user
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTForContract = (options) => {
  const Web3Api = useMoralisWeb3Api();
  const { account, token } = useMoralisWeb3Api();
  //const { chainId } = useMoralisDapp();
  const chainId = "0x3";
  const { resolveLink } = useIPFS();
  const [NFTForContract, setNFTForContract] = useState([]);
  const {
    fetch: getNFTForContract,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(Web3Api.token.getAllTokenIds, { chain: chainId, address: "0x4c4a07f737bf57f6632b6cab089b78f62385acae", ...options });
  //useMoralisWeb3ApiCall(Web3Api.token.getAllTokenIds, { chain: chainId, address: "0x4c4a07f737bf57f6632b6cab089b78f62385acae", ...options });
  
//this line above is getting the NFTs via API call
//had to add in the address as this was missing from the source


  useEffect(() => {
    console.log("use effect", data, error, isLoading);
    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata) {
          NFT.metadata = JSON.parse(NFT.metadata);
          // metadata is a string type
          NFT.image = resolveLink(NFT.metadata?.image);
          console.log(NFT, data);
        }
      }
      setNFTForContract(NFTs);
    }else{
      console.log("data must be empty", data, chainId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getNFTForContract, NFTForContract, error, isLoading };
};
