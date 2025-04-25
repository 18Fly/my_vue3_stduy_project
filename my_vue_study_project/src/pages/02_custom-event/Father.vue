<template>
	<div class="father">
		<h3>父组件</h3>
		<h4 v-show="toy_son">儿子的玩具: {{ toy_son }}</h4>
		<Child @send-toy="getToy"></Child>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

let toy_son = ref('')
function getToy(value: string) {
	toy_son.value = value
}
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-right: 5px;
}
</style>