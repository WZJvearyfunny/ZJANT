<template>
  <div class="smart">
    <div><Menu @click="clickMenu"/></div>
    <div><Container/></div>
    <div><Simulator/></div>
  </div>
</template>

<script lang='ts' setup>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
import Menu from '@/components/Menu.vue'
import Container from '@/components/Container.vue'
import Simulator from '@/components/Simulator.vue'

interface DataProps {}

const clickMenu = (e:any)=>{
    console.log(e)
}
</script>
<style scoped lang="scss">
    .smart{
        height: 100vh;
        margin: 0 1rem;
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        grid-column-gap:1rem
    }
</style>