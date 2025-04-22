<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
// ref用来创建 ““基本类型或对象”” 的响应式数据
import { ref } from 'vue'
import { type PersonInterface, type Persons } from '@/types'

let name = ref('张三') // 这样的数据不是响应式的
let age = ref(18)
let tel = ref('13561654985')

let person: PersonInterface = {
  name: '张三',
  age: 18,
  id: '1'
}

let personList: /* Array<PersonInterface> */Persons = [{
  name: '张三',
  age: 18,
  id: '1'
}, {
  name: '李四',
  age: 19,
  id: '2'
}, {
  name: '王五',
  age: 20,
  id: '3'
}]

function showTel() {
  alert(tel.value)
}
function changeName() {
  // 在JS中操作ref包含的数据得加'.value'
  name.value = '李四'
}
function changeAge() {
  age.value += 1
}
</script>

<!-- <script lang="ts">
export default {
  name: 'Person',
  // setup() { // setup的渲染优先级高于data(){} 所以data中可以通过this取setup的数据 而setup不能读取data中的数据
  //   //setup中定义的this是undefined
  //   //数据
  //   let name = '张三' // 这样的数据不是响应式的
  //   let age = 18
  //   let tel = '13561654985'

  //   function showTel() {
  //     alert(tel)
  //   }
  //   function changeName() {
  //     name = '李四'
  //   }
  //   function changeAge() {
  //     age += 1
  //   }

  //   return {
  //     name,
  //     age,
  //     showTel,
  //     changeName,
  //     changeAge
  //   }

  //   //setup中返回值也可以是渲染函数
  //   return () => {
  //     return { name, age, showTel, changeName, changeAge }
  //   }
  // }
}
</script> -->

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
