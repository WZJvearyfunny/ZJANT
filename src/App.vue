<template>
  <RouterView/>
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  import { useDark,useTitle } from '@vueuse/core'
  const isDark = useDark()
  useTitle(()=>isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
</script>

<style>
body #app{
  background: #f8f8f8;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
}
</style>
