<template>
  <div class="dog">
    <h2>当前求和为: {{ sum }}，放大十倍后: {{ bigNum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <button @click="getDog">点击获取新的图片</button>
    <img v-for="dog, index in dogList" :src="dog" :key="index" alt="">
  </div>
</template>

<script lang="ts" setup>
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { sum, add, bigNum } = useSum();
const { dogList, getDog } = useDog();
</script>

<style scoped>
.dog {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

img {
  margin: 10px;
  width: 200px;
}
</style>
