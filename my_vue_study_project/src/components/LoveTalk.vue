<template>
  <div class="talk">
    <button @click="getOneSentence">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
    <hr>
    <p>{{ countStore.smallNum }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/Count';
import { useTalkStore } from '@/store/LoveTalk';
import { storeToRefs } from 'pinia';

// let talkList = reactive([{ id: 'fasd01', title: '你好' }, { id: 'fasd02', title: '我好' }, { id: 'fasd03', title: '他好' }, { id: 'fasd04', title: '她好' }, { id: 'fasd05', title: '它好' }, { id: 'fasd06', title: '全好' }])

let countStore = useCountStore()
let talkStore = useTalkStore()

let { talkList } = storeToRefs(talkStore)

talkStore.$subscribe((mutation, state) => {
  console.log(mutation)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

async function getOneSentence() {
  // 连续解构赋值,从外到内,最后对象:对象是重命名
  // let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  talkStore.getOneTalk()
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
