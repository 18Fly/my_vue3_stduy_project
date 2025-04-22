<template>
  <div class="people">
    姓: <input type="text" v-model="firsName"><br>
    名: <input type="text" v-model="lastName"><br>
    全名: <span>{{ fullName }}</span><br>
    <button @click="changeName">修改姓名</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'People'
}
</script> -->

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
let firsName = ref('zhang')
let lastName = ref('san')

// 这么定义的fullName是一个计算属性，只可读，不可改，改也是改的firstName，改完fullName也会重新计算，但是fullName的计算属性会缓存，不会每次都重新计算，除非fullName的依赖项发生变化，才会重新计算
// let fullName = computed(() => {
//   console.log('fullName被调用了')
//   return `${firsName.value.slice(0, 1).toUpperCase() + firsName.value.slice(1)}-${lastName.value}`
// })
let fullName = computed({
  get() {
    return `${firsName.value.slice(0, 1).toUpperCase() + firsName.value.slice(1)}-${lastName.value}`
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firsName.value = str1.toLowerCase()
    lastName.value = str2
  }
})

let count = 0

const stopWatch = watch(firsName, (newValue, oldValue) => {
  console.log(`${oldValue} -> ${newValue}`);
  if (++count > 10)
    stopWatch()
})

function changeName() {
  // 在JS中操作ref包含的数据得加'.value'
  fullName.value = 'Li-si'
}

</script>

<style scoped>
.people {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
