<template>
  <Header></Header>
  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>