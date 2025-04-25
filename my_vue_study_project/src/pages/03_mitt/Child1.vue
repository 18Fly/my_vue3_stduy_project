<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4 v-show="msg">接收到消息: {{ msg }}</h4>
		<button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
	</div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import emitter from '@/utils/emitter';

let msg = ref('')

emitter.on('send_msg', (value: any) => {
	console.log('子组件1收到消息：', value)
	msg.value = value
})

// 数据
let toy = ref('奥特曼')

// 在组件卸载时解绑send_msg事件
onUnmounted(() => {
	// 移除事件监听，防止影响其他组件
	emitter.off('send_msg')
})
</script>

<style scoped>
.child1 {
	margin-top: 50px;
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}

.child1 button {
	margin-right: 10px;
}
</style>