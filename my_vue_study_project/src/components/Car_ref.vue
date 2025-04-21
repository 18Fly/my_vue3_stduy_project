<template>
  <div class="car">
    <h1>一辆{{ car.brand }}，价值:{{ car.value }}元</h1>
    <button @click="changePrice">修改汽车价格</button>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeGameName">修改游戏</button>
    <hr>
    <h2>测试: {{ obj.a.b.value.name }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 数据
let car = ref({ brand: '保时捷', value: 1000000 })
let games = ref([
  { id: 1, name: '《魔兽世界》' },
  { id: 2, name: '《英雄联盟》' },
  { id: 3, name: '《穿越火线》' }
])

let obj = {
  a: {
    b: ref({
      name: '老和尚'
    })
  }
}

function changePrice() {
  car.value.value += 10000
  console.log(car);
}

function changeGameName() {
  games.value[0].name = '《魔兽世界》改版'
}

function changeObj() {
  console.log(obj);
  obj.a.b.value.name = '老干妈'
  console.log(obj.a.b);
}

</script>

<script lang="ts">
export default {
  name: 'Car_ref'
}
</script>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
