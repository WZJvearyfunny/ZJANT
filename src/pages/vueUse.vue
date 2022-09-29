<template>
    <h1 @click="getlist"> 测试 vueUse 的鼠标坐标 </h1>
    <h3>Mouse: {{x}} x {{y}}</h3>
    <OnClickOutside v-slot="{ isDark, toggleDark }">
        <button @click="toggleDark()">
            Is Dark: {{ isDark }}
        </button>
    </OnClickOutside>
</template>
    
<script lang="ts" setup>
import { useMouse, onClickOutside } from '@vueuse/core'
import OnClickOutside from '@/components/OnClickOutside.vue'
import API from '@/api';

const { x, y } = useMouse()
const getlist = async () => {
    let result = await API.login('zhangsan', '123456');
}
</script>