<template>
  <div class="watch-effort">
    <!-- ref标签属性可以把标签绑定到ref变量上，方便后续操作 -->
    <h2 ref="title">需求: 当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温: {{ temp }}℃</h2>
    <h2>当前水位: {{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
    <button @click="getTitle">打印标题</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'WatchEffort'
}
</script> -->

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

let title = ref()

let temp = ref(10)
let height = ref(0)

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

function getTitle() {
  console.log(title.value)
}

// watch实现
/* watch([temp, height], (newValue, oldValue) => {
  let [tempValue, heightValue] = newValue;
  if (tempValue >= 60 || heightValue >= 80) {
    console.log('给服务器发请求');
  }
}) */

let tmpBool = (a: number, b: number) => {
  return a >= 60 || b >= 80
}

// watchEffect实现
watchEffect(() => {
  if (tmpBool(temp.value, height.value)) {
    console.log('给服务器发请求');
  }
})

// 将本组件内的变量可以暴露给外部引用的地方
defineExpose({ title })

</script>

<style scoped>
.watch-effort {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
