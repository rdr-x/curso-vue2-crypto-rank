<template>
  <div>
    <px-assets-table :assets="assets"/>
  </div>
</template>

<script>
import { getAssets } from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
      return {
          assets: []
      }
  },

  created() {
      this.getData()
  },

    methods: {
        async getData() {
            this.assets = await getAssets()
        }
    }
}
</script>
