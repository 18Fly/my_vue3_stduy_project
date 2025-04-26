<template>
  <div class="shallow">
    <h2>求和为: {{ sum }}</h2>
    <h2>名字为: {{ person.name }}</h2>
    <h2>年龄为: {{ person.age }}</h2>
    <hr>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts">
import { shallowReactive, shallowRef } from 'vue';

// readonly任何层级都只能读，不能修改
// shallowReadonly顶层只能读，但深层不限制

let sum = shallowRef(0)
// shallowRef只是浅层代理
let person = shallowReactive({
  name: '张三',
  age: 18,
  a: { // 属性a可以访问修改，其属性不可被代理到
    b: 1,
    c: '2'
  }
})

function changeName() {
  person.name = '李四'
}

function changeAge() {
  person.age = 20
}

function changePerson() {
  Object.assign(person, {
    name: '王五',
    age: 22
  })
}

function changeSum() {
  sum.value++
}

</script>

<style scoped>
.shallow {
  background-color: skyblue;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 20px;
}
</style>
