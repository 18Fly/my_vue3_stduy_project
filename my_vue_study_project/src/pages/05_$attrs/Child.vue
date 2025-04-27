<template>
	<div class="child">
		<h3>子组件</h3>
		<!-- $attrs是父组件传来的props，如果当前组件全部接收后，$attrs会变为空对象，接多少就少多少 -->
		<GrandChild v-bind="$attrs" />
	</div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';
</script>

<style scoped>
.child {
	margin-top: 20px;
	background-color: skyblue;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>