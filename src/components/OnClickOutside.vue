<template>
    <OnClickOutside @trigger="close">
        <div>
            Click Outside of Me
        </div>
    </OnClickOutside>
</template>

<script lang='ts' setup>
import { OnClickOutside } from '@vueuse/components'

interface DataProps {}

const close = () => {
    console.log('11')
}
</script>
<style scoped>
</style>