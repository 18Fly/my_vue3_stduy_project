<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- query查询字符串作为传参方法 -->
        <button @click="getNews(news)">查看新闻</button>
        <RouterLink :to="{
          name: 'DETAIL', query:
          {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink>

        <!-- 使用params作为请求参数传参方法 -->
        <!-- <RouterLink :to="{
          name: 'DETAIL', params: { //params必须使用路由name不能用path
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink> -->
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const newsList = reactive([
  { id: 'asd01', title: '十种抗癌食物', content: '西兰花' },
  { id: 'asd02', title: '十种抗癌食物', content: '西红柿' },
  { id: 'asd03', title: '十种抗癌食物', content: '西蓝花' },
  { id: 'asd04', title: '十种抗癌食物', content: '西蓝花' },
])

// useRoute和useRouter不一样,一个是路由信息,一个是路由管理
const router = useRouter()
function getNews(news: any) {
  router.replace({
    name: 'DETAIL',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}

</script>

<style scoped>
.news {
  background-color: pink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
