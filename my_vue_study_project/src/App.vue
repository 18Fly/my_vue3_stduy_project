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

    <!-- <Count />
    <LoveTalk /> -->

    <!-- <h1 class="title">
      Vue3 组件间通信
    </h1>
    <hr> -->
    <!-- <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3"> -->
    <!-- 导航区 -->
    <!-- <router-link active-class="active" class="list-group-item" to="/props">1. props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">2. 自定义事件</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">4. v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">6. <span
            class="small">$refs、$parent</span></router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">7. provide、inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8. pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9. slot</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body"> -->
    <!-- 占位一个展示区 -->
    <!-- <router-view></router-view>
        </div>
      </div>
    </div> -->

    <Shallow></Shallow>
  </div>
</template>

<script lang="ts" setup>

import Shallow from './components/Shallow.vue';


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

<style scoped></style>
