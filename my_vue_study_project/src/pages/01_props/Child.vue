<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>玩具: {{ toy }}</h4>
		<h4>父亲的玩具: {{ fatherToy }}</h4>
		<button @click="sendTo(toy)">把玩具传给父亲</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['fatherToy', 'sendTo'])

let toy = ref('百特曼')
</script>

<style scoped>
.child {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>