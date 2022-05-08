import React from 'react'

import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName, } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'



function Login() {
    
 const { data: account } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address })
  const { data: ensName } = useEnsName({ address: account?.address })
  const { disconnect } = useDisconnect()

  if (account)
    return (
      
      <div className="text-white">
          <img src={ensAvatar} alt="ENS Avatar" />
        Connected to {account.address}
        <button className = "bg-white text-black"onClick={() => disconnect()}>Disconnect</button>
      </div>

    )
  return (<button className= "bg-white" onClick={() => connect()}>Connect Wallet</button>)
}


export default Login