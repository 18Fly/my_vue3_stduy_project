<template>
  <!-- 此处传递的式$event对象的target的value，所以父组件得到的$event其实是具体数据 -->
  <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
  <br>
  <input type="text" :value="password" @input="emit('update:password', (<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts">
defineProps(['modelValue', 'password'])
// 初始化并声明事件，通过事件处理将数据传递给父组件
const emit = defineEmits(['update:modelValue', 'update:password'])
</script>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, blue, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>