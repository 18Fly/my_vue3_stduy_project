import axios from "axios";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { ref } from "vue";

// 选项式API
// export const useTalkStore = defineStore('Talk', {
//   actions: {
//     async getOneTalk() {
//       this.talkList.push({ id: `fasd0${this.index++}`, title: (await axios.get('https://api.vvhan.com/api/text/sexy?type=json')).data.data.content })
//     }
//   },
//   state: () => {
//     return {
//       talkList: JSON.parse(localStorage.getItem('talkList') || '[]')
//       , index: 7
//     }
//   }
// })

// 组合式API 组合式结构没那么繁琐
export const useTalkStore = defineStore('Talk', () => {
  // 数据
  const talkList = ref(JSON.parse(localStorage.getItem('talkList') || '[]'))
  // 函数
  async function getOneTalk() {
    talkList.value.push({ id: nanoid(6), title: (await axios.get('https://api.vvhan.com/api/text/sexy?type=json')).data.data.content })
  }
  // 向外部暴露
  return { talkList, getOneTalk }
})
