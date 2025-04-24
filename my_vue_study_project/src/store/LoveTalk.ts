import { defineStore } from "pinia";

export const useTalkStore = defineStore('Talk', {
  state: () => {
    return {
      talkList: [
        { id: 'fasd01', title: '你好' }, { id: 'fasd02', title: '我好' }, { id: 'fasd03', title: '他好' }, { id: 'fasd04', title: '她好' }, { id: 'fasd05', title: '它好' }, { id: 'fasd06', title: '全好' }
      ]
    }
  }
})