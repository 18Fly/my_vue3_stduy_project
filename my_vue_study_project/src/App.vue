<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
  <div class="app">
    <!-- <Person></Person> -->
    <!-- <Car /> -->
    <!-- <Car_ref /> -->
    <!-- <PersonCopy /> -->
    <!-- <People /> -->
    <!-- <Car_watch /> -->
    <WatchEffort ref="title" />
    <button @click="getTitle">获取标签信息</button>
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
import { ref } from 'vue'

let title = ref()

function getTitle() {
  console.log(title.value)
}

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
