<template>

</template>


<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';

console.log('我是Home界面！')

onMounted(() => {
  console.log('Home组件挂载了...')
})

onUnmounted(() => {
  console.log('Home组件被卸载了...')
})
</script>

<style scoped></style>
