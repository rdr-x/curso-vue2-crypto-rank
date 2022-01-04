<template>
  <main>
    <px-header :links="links"/>
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: 'App',
  components: {
    PxHeader,
  },

  data() {
    return {
      links: [
        {
          name: 'BTC',
          url: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          name: 'ETH',
          url: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          name: 'DOT',
          url: { name: 'coin-detail', params: { id: 'polkadot' } }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
