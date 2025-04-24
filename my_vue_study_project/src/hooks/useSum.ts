import { onMounted, reactive, computed, ref } from 'vue'

export default function () {
  // 数据
  let sum = ref(0)
  let bigNum = computed(() => {
    return sum.value * 10
  })


  // 方法
  function add() {
    sum.value += 1
  }

  // Hook
  onMounted(() => {
    add()
  })

  return { sum, add, bigNum }
}
