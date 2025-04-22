<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
  <div class="app">
    <!-- <Person></Person> -->
    <!-- <Car /> -->
    <!-- <Car_ref /> -->
    <!-- <PersonCopy /> -->
    <!-- <People /> -->
    <Car_watch />
  </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import Car_ref from './components/Car_ref.vue'
import PersonCopy from './components/Person copy.vue'
import People from './components/People.vue'
import Car_watch from './components/Car_watch.vue'

export default {
  name: 'App', //组件名
  components: {
    Person,
    Car,
    Car_ref,
    PersonCopy,
    People,
    Car_watch
  }
}

</script>
