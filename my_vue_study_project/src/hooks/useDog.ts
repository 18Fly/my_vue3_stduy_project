import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'

export default function () {
  // 数据
  let dogList = reactive(['https://images.dog.ceo//breeds//puggle//IMG_174753.jpg'])

  // 方法
  async function getDog() {
    try {
      dogList.push((await axios.get('https://dog.ceo/api/breeds/image/random')).data.message)
    } catch (error) {
      alert('网络错误: ' + error)
    }
  }

  // Hook
  onMounted(() => {
    getDog()
  })

  // 向外部提供的
  return { dogList, getDog }
}