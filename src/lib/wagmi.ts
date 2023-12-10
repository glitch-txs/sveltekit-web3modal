import { getAccount, getNetwork, watchAccount, watchNetwork } from "@wagmi/core"
import type { Chain, GetAccountResult, GetNetworkResult, PublicClient } from "@wagmi/core"
import { readable } from "svelte/store"

import { defaultWagmiConfig } from '@web3modal/wagmi'

import { mainnet, arbitrum } from 'viem/chains'

export const projectId = 'cdbd18f9f96172be74c3e351ce99b908'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const chains = [mainnet, arbitrum]
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

export const address = readable<`0x${string}` | undefined>(getAccount().address, (set) => {
  function onAccountChange(account: GetAccountResult<PublicClient>){
    set(account.address)
  }

  return watchAccount(onAccountChange)
})

export const chain = readable<Chain['name'] | undefined>(getNetwork().chain?.name, (set)=>{
  function onChainChange(network: GetNetworkResult){
    set(network.chain?.name)
  }

  return watchNetwork(onChainChange)
})