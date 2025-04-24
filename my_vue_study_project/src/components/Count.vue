<template>
  <div class="count">
    <h2>当前求和为: {{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">加1</option>
      <option value="2">加2</option>
      <option value="3">加3</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
    <hr>
    <ul>
      <li v-for="item in talkStore.talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue';
import { useCountStore } from '@/store/count';
import { useTalkStore } from '@/store/LoveTalk';

// 对于一个reactive包裹的实例对象中的一个ref属性值，会默认帮拆包
const countStore = useCountStore()
const talkStore = useTalkStore()

// 虽然这样写不知道图啥，但是可以针对屎山代码，能不动声明的变量就尽量不动
// let sum = toRef(countStore.sum)
// watch(sum, (value) => {
//   console.log(value)
//   countStore.$state.sum = value
//   console.log(countStore.sum)
// })

let n = ref(1)

function add() {
  countStore.sum += n.value
}
function sub() {
  countStore.sum -= n.value
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}

select,
button {
  margin: 0 5px;
  font-size: 25px;
}
</style>
