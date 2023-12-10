<script lang="ts">
import { projectId, chains, wagmiConfig, address, chain } from '$lib/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi';

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'dark' })
</script>


<div class="container" >
  <h1>Welcome to SvelteKit & Web3Modal</h1>
  <div>
    <div>user address: {$address}</div>
    <div>Connected chain: {$chain}</div>
  </div>
  <w3m-button/>
</div>

<style>
  :global(*){
    margin: 0;
    padding: 0;
  }
  :global(body, html){
    width: 100%;
    min-height: 100vh;
  }

  .container{
    padding: 20px;
    text-align: center;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 100px;
  }
</style>
