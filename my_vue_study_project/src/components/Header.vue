<template>
  <h2>Vue路由测试</h2>
  <div class="navigate">
    <!-- replace设置后无法跳转回上一次访问的页面,默认是push,每次访问行为都会被历史记录,可返回 -->
    <RouterLink :to="{ path: '/home' }">首页</RouterLink>
    <RouterLink :to="{ name: 'NEWS' }">新闻</RouterLink>
    <RouterLink :to="{ path: '/about' }">关于</RouterLink>
    <RouterLink :to="{ name: 'DOG' }">小狗</RouterLink>
  </div>
</template>

<script lang="ts" setup>
</script>