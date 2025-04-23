<template>
  <div class="watch-effort">
    <!-- ref标签属性可以把标签绑定到ref变量上，方便后续操作 -->
    <h2 ref="title">需求: 当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温: {{ temp }}℃</h2>
    <h2>当前水位: {{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
    <button @click="getTitle">打印标题</button>
    <hr>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
    </ul>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'WatchEffort'
}
</script> -->

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, ref, watch, watchEffect } from 'vue'
import { type Persons } from '@/types';

// defineProps可以用泛型约束接收对象,加?可以使父组件不强制要求传入该属性
// let x = defineProps<{ list?: Persons }>()

// withDefaults用来给props设置默认值，默认值需要设置为函数，每次访问props时都会执行函数，返回值就是默认值
let x = withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: '0', name: '未知用户', age: 0 }]
});
// console.log(x.list[0]);

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

// setup执行，就相当于创建了

onBeforeMount(() => {
  console.log('组件挂载前执行');
})

onMounted(() => {
  console.log('组件挂载后执行');
})

onUpdated(() => {
  console.log(`更新后水温为${temp.value}度，水位为${height.value}cm`);
})

// Vue3不再像Vue2叫destory，而是unmount
onBeforeUnmount(() => {
  debugger;
  console.log('组件卸载前执行');
})

</script>

<style scoped>
.watch-effort {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
