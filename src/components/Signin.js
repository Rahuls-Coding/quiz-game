import React from 'react'

import '@rainbow-me/rainbowkit/styles.css';
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';

import { chain, createClient, WagmiProvider, useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.alchemy(process.env.ALCHEMY_ID),
    apiProvider.fallback()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function Signin() {
    
    // const { data } = useAccount()
//     
// if  (data) {
  return (
    <WagmiProvider client={wagmiClient}>
    <RainbowKitProvider theme={darkTheme()}coolMode chains={chains}>
    <div className="text-center grid justify-items-center items-center h-screen">
      <div className="text-white text-3xl"> Sign In!</div>
      <ConnectButton/>

    </div>
    </RainbowKitProvider>
  </WagmiProvider>

  )
}


export default Signin