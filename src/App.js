//App file contains routes, react-moralis, checks authentication with moralis
//enables and checks for web3
//useEffect to enable web3 if authenticated

import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
//import Wallet from "components/Wallet";
import { Menu, Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import Wallet from "components/plasmic/Wallet";
import Scan from "components/plasmic/Scan";
import Owner from "components/plasmic/Owner";
import NotOwner from "components/plasmic/NotOwner";
import Item from "components/plasmic/Item";
import Homepage from "components/plasmic/Homepage";

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

 return( <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Homepage isServerInfo={isServerInfo} />
            </Route>
            <Route path="/scan">
              <Scan />
            </Route>
            <Route path="/owner">
              <Owner />
            </Route>
            <Route path="/not-owner">
              <NotOwner />
            </Route>
            <Route path="/item">
              <Item />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>);
}

export default App;
