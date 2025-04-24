<template>
  <div class="talk">
    <button @click="getOneSentence">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
    <hr>
    <p>{{ countStore.sum }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/count';
import { useTalkStore } from '@/store/LoveTalk';
import axios from 'axios';
import { reactive, watch } from 'vue';

// let talkList = reactive([{ id: 'fasd01', title: '你好' }, { id: 'fasd02', title: '我好' }, { id: 'fasd03', title: '他好' }, { id: 'fasd04', title: '她好' }, { id: 'fasd05', title: '它好' }, { id: 'fasd06', title: '全好' }])

let index = 7;

let countStore = useCountStore()
let talkStore = useTalkStore()

let talkList = reactive(talkStore.talkList)
watch(talkList, (value) => {
  talkStore.talkList = value
})

async function getOneSentence() {
  // 连续解构赋值,从外到内,最后对象:对象是重命名
  // let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  talkList.push({ id: `fasd0${index++}`, title: (await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')).data.content })
}

</script>

<style scoped>
.talk {
  background-color: pink;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}
</style>
