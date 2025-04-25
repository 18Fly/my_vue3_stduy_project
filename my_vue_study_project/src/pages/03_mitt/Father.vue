<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="emitter.emit('send_msg', ref('hello'))">给两个子组件发消息</button>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.father button {
  margin-left: 5px;
}
</style>