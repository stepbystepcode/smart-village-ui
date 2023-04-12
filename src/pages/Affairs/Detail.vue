<template>
  <q-page class="column q-ma-lg">
    <BackBtn />
    <span class="text-h4 q-my-lg">
      {{ detail.list[parseInt(route.params.id)].title }}</span>

    <p class="text-h6" v-html="content.party"></p>
  </q-page>
</template>

<script setup lang="ts">
import { nots, news, countries, content } from '../../data/db';
import BackBtn from '../../components/BackBtn.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const detail = route.params.type === 'nots' ? nots : route.params.type === 'news' ? news : countries;
</script>
<style scoped lang="scss"></style>
