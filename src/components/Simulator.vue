<template>
    <div class="simulator">
      
    </div>
  </template>
  
  <script lang='ts' setup>
  import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
  interface DataProps {}
  </script>
  <style lang="scss" scoped>
      .simulator{
          width: 100%;
          height: 900px;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 1rem;
          margin: 30px 0;
      }
  </style>