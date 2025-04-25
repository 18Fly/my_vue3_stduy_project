<template>
  <div class="count">
    <h2>当前求和为: {{ sum }}</h2>
    <h3>欢迎来到: {{ name }}，坐落于: {{ location }}</h3>
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
import { ref, toRef, toRefs, watch } from 'vue';
import { useCountStore } from '@/store/Count';
import { useTalkStore } from '@/store/LoveTalk';
import { storeToRefs } from 'pinia';

// 对于一个reactive包裹的实例对象中的一个ref属性值，会默认帮拆包
const countStore = useCountStore()
const talkStore = useTalkStore()
let { sum, name, location } = storeToRefs(countStore)

// 虽然这样写不知道图啥，但是可以针对屎山代码，能不动声明的变量就尽量不动
// let sum = toRef(countStore.sum)
// watch(sum, (value) => {
//   console.log(value)
//   countStore.$state.sum = value
//   console.log(countStore.sum)
// })

let n = ref(1)

function add() {
  countStore.operateNum(n.value)
  countStore.$patch({
    name: '外长城',
    location: '甘肃-内蒙古'
  })
}
function sub() {
  countStore.operateNum(-n.value)
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
