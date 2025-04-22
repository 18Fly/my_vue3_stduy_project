<template>
  <div class="person">
    <h1>姓名:{{ person.name }}</h1>
    <h2>年龄:{{ person.age }}</h2>
    <hr>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
// ref用来创建 ““基本类型或对象”” 的响应式数据
import { reactive, toRefs, toRef } from 'vue'

let person = reactive({
  name: '张三',
  age: 18
})

let { name, age } = toRefs(person) // toRefs()用来将响应式数据对象中的每个属性都Proxy后变成含有多个响应式ref对象的对象，键为原本对象的属性名
let tmp = toRef(person, 'name') // toRef()用来将响应式数据对象中的某个属性Proxy后变成一个响应式的ref对象
// yysy，这个Proxy和智能指针能达到的功能有些类似

function changeName() {
  name.value += '~';
}
function changeAge() {
  age.value += 1;
}

</script>

<script lang="ts">
export default {
  name: 'Person'
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
