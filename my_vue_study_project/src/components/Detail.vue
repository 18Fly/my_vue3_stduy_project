<template>
  <ul class="news-list">
    <li>编号: {{ id }}</li>
    <li>标题: {{ title }}</li>
    <li>内容: {{ content }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs, reactive, watch } from 'vue';
import { useRoute } from 'vue-router'

// 第一种方法[query]
// let route = useRoute()
// let { query } = toRefs(route)

// 第一种方法[query][A]
// const route = useRoute();
// // 创建响应式副本
// const queryState = reactive({ ...route.query });
// // 监听 route.query 的变化并同步到 queryState
// watch(
//   () => route.query,
//   (newQuery) => {
//     Object.assign(queryState, newQuery);
//   }
// );
// // 解构出响应式的属性
// const { id, title, content } = toRefs(queryState);

// 第二种方法[params]
const route = useRoute();
defineProps(['id', 'title', 'content'])

</script>

<style scoped>
.news-list {
  background-color: green;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
