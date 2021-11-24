// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicItem } from "./plasmic/ecommerce_starter/PlasmicItem";
import { useNFTBalance } from "hooks/useNFTBalance";
import { useNFTTransfers } from "hooks/useNFTTransfers";
import { useNFTForContract } from "hooks/useNFTForContract";
import { useEffect, useState } from "react";
//import { setPlumeStrictMode } from "@plasmicapp/react-web";

      const queryString = require('query-string');
      //get url and split out attribute, which will be NFT contract address
      const windowUrl = window.location.search;
      const params = queryString.parse(windowUrl);

function Item_(props, ref) {
    
      //const { NFTBalance } = useNFTBalance();
      const { NFTForContract } = useNFTForContract();
      //const { NFTTransfers } = useNFTTransfers();
      const [ Item, setItem ] = useState();
      const [ itemName, setName ] = useState();
      const [ itemDesc, setDesc ] = useState();
      const [ itemImage, setImage ] = useState();
      const [ itemAuth, setItemAuth ] = useState();

      useEffect(() => {
        if (NFTForContract) {
          const NFTItem = NFTForContract.filter(function (nft){
            console.log("running useEffect", NFTForContract);
            return nft.token_id == params.id;
          })
          setItem(NFTItem[0]);
          if (Item){
            setName(Item["metadata"].name);
            setDesc(Item["metadata"].description);
            setImage(Item["metadata"].image);
            setItemAuth("Owner");
            console.log(itemName, itemDesc, itemImage);
          }else{
            setItemAuth("Not Owner");
          }  
        }
      })
     
      //useEffect(() => {
      //  if (NFTBalance) {
      //    const NFTItem = NFTBalance.filter(function (nft){
      //      console.log("running useEffect", NFTBalance, NFTTransfers);
      //      return nft.token_id == params.id;
      //    })
      //    setItem(NFTItem[0]);
      //    if (Item){
      //      setName(Item["metadata"].name);
      //      setDesc(Item["metadata"].description);
      //      setImage(Item["metadata"].image);
      //      setItemAuth("Owner");
      //      console.log(itemName, itemDesc, itemImage);
      //    }else{
      //      setItemAuth("Not Owner");
      //    }  
      //  }
      //})

  return <PlasmicItem root={{ ref }} {...props} 
  
  nftNamePage={{
    children: String(itemName)
    }}
  nftDescriptionPage={{
    children: String(itemDesc)
    }}
  nftImagePage={{
    src: String(itemImage)
    }}
  ownerAuth={{
    children: String(itemAuth)
    }}

  />;
}

const Item = React.forwardRef(Item_);

export default Item;