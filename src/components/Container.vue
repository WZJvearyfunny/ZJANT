<template>
    <div class="menu">
      <div>1</div>
      <div>1</div>
    </div>
  </template>
  
  <script lang='ts' setup>
  import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
  interface DataProps {}
  </script>
  <style lang="scss" scoped>
      .menu{
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: .5rem;
      }
  </style>