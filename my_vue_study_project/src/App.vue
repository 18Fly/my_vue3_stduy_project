<template>
  <div class="app">
    <!-- <Person></Person> -->

    <!-- <Car /> -->

    <!-- <Car_ref /> -->

    <!-- <PersonCopy /> -->

    <!-- <People /> -->

    <!-- <Car_watch /> -->

    <!-- v-if在false时是卸载，而v-show在false时是隐藏不显示 -->

    <!-- <WatchEffort ref="title" :list="personList" v-if="isShow" /> -->

    <!-- <WatchEffort ref="title" :list="personList" v-show="isShow_2" /> -->

    <!-- <button @click="getTitle">获取标签信息</button> -->

    <!-- <Dog /> -->

    <!-- <Header></Header>
    <div class="main-content">
      <RouterView></RouterView>
    </div> -->
    <!-- <Defaultlayouts /> -->
    <Count />
    <LoveTalk />
  </div>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import Car_ref from './components/Car_ref.vue'
import PersonCopy from './components/Person copy.vue'
import People from './components/People.vue'
import Car_watch from './components/Car_watch.vue'
import WatchEffort from './components/WatchEffort.vue'
import Dog from './components/Dog.vue'
import Header from './components/Header.vue'
import Defaultlayouts from './layouts/Defaultlayouts.vue'
import Count from './components/Count.vue'

import { reactive, ref } from 'vue'
import { type Persons } from '@/types'
import { RouterView, RouterLink } from 'vue-router'
import LoveTalk from './components/LoveTalk.vue'


// let isShow = ref(true)
// let isShow_2 = ref(true)

// // reactive、ref可以加泛型约束属性
// let personList = reactive<Persons>([
//   {
//     name: '张三',
//     age: 18,
//     id: '1'
//   },
//   {
//     name: '李四',
//     age: 19,
//     id: '2'
//   }
// ])

// let title = ref()

// function getTitle() {
//   console.log(title.value)
// }

// 已经不需要用一个普通script标签去export default一个对象了，直接使用<script setup>，在setup标记的标签内使用defineComponent去显式配置以及一些props属性
// export default {
//   name: 'App', //组件名
//   components: {
//     Person,
//     Car,
//     Car_ref,
//     PersonCopy,
//     People,
//     Car_watch,
//     WatchEffort
//   }
// }

</script>
