import { defineStore } from "pinia";

export const useCountStore = defineStore('Count', {
  // actions里面放置的是可调用的方法，用于响应组件中的“动作”
  actions: {
    // 这里也可以设置部分对数据的逻辑操作，但最好设置通用、可复用的逻辑
    operateNum(value: number) {
      this.sum += value
    },
  },
  // 真正存储数据的地方
  state: () => {
    return {
      sum: 6,
      name: '故宫',
      location: '北京'
    }
  },
  getters: {
    bigNum(state) {
      return state.sum * 10
    },
    smallNum: state => {
      return state.sum / 10.0
    }
  }
})