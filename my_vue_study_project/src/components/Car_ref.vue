<template>
  <div class="car">
    <h1 :key="componentKey">一辆{{ car.brand }}，价值:{{ car.value }}元</h1>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
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
import { getCurrentInstance, nextTick, reactive, ref } from 'vue';

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
}

function changeGameName() {
  games.value[0].name = '《魔兽世界》改版'
}

function changeObj() {
  obj.a.b.value.name = '老干妈'
}

let componentKey = ref(0)

function changeCar() {
  let tmp = car.value
  // console.log(tmp)
  /*
  如果修改的是reactive包装的变量，替换一个新的reactive即新的Proxy对象，页面DOM不会刷新，需要强制刷新DOM页面，但此时car的Proxy确实已经发生变化，所以这种操作属于未被Vue定义包含的行为，不建议这样做
  */
  car.value = reactive({ // 这种写法如果修改的是ref对象，修改后数据响应式依旧保持，但是原Proxy对象被新的Proxy对象所替代(即便用reactive包起来，ref内部本身就会把传进来的数据重新代理替换旧的)，不如直接用Object.assign()在原有Proxy对象上覆盖为新的属性值
    brand: '奔驰',
    value: 100000
  })
  componentKey.value += 1
  console.log(`两次Proxy对象：${tmp === car.value}`);
  console.log(car)
  // Object.assign(car.value, {
  //   brand: '奔驰',
  //   value: 100000
  // })
}


</script>

<!-- <script lang="ts">
export default {
  name: 'Car_ref'
}
</script> -->

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
