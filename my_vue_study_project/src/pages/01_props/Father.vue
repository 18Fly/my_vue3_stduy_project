<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>玩具: {{ toy }}</h4>
		<h4 v-show="toy_son">儿子传来的玩具: {{ toy_son }}</h4>
		<Child :sendTo="getToy" :fatherToy="toy"></Child>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from '@/pages/01_props/Child.vue';

let toy = ref('无人机')
let toy_son = ref('')

function getToy(value: string) {
	toy_son.value = value
}
</script>

<style scoped>
.father {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
