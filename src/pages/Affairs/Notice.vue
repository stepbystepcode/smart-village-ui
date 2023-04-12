<template>
  <q-page class="column">
    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator>
      <q-tab @click.prevent="pushto()">
        <q-icon name="chevron_left" size="30px"></q-icon>
      </q-tab>
      <q-tab name="notification" label="党务公开" />
      <q-tab name="news" label="政务公开" />
      <q-tab name="country" label="村务公开" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="notification">

        <div v-for="(not, index) in nots.list" :key="index" class="column flex-center">
          <span class="text-grey">{{ not.time }}</span>
          <q-card class="q-my-md" @click="router.push(`/detail/nots/${index}`)">
            <q-img src="/img/bg/1.jpg" />
            <q-card-section class="q-ma-sm">
              <div class="text-h6">{{ not.title }}</div>
            </q-card-section></q-card>
        </div>


      </q-tab-panel>

      <q-tab-panel name="news">
        <div v-for="(nnew, index) in news.list" :key="index" class="column flex-center">
          <span class="text-grey">{{ nnew.time }}</span>

          <q-card class="q-my-md" @click="router.push(`/detail/news/${index}`)">
            <q-img src="/img/bg/2.jpg" />
            <q-card-section class="q-ma-sm">
              <div class="text-h6">{{ nnew.title }}</div>
            </q-card-section></q-card>
        </div>

      </q-tab-panel>

      <q-tab-panel name="country">
        <div v-for="(country, index) in countries.list" :key="index" class="column flex-center">
          <span class="text-grey">{{ country.time }}</span>
          <q-card class="q-my-md" style="width:100%" @click="router.push(`/detail/countries/${index}`)">
            <q-img src="/img/bg/3.jpg" />
            <q-card-section class="q-ma-sm">
              <div class="text-h6">{{ country.title }}</div>
            </q-card-section></q-card>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { nots, news, countries } from '../../data/db';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const tab = ref(route.params.tab);
console.log(route.params.tab);


const pushto = () => { router.push('/home') }
</script>
<style scoped>
.q-tab-panels {
  flex: 1;
  overflow: scroll;
  background: #fbfbfb;

}

.q-panel>div {
  height: 100vh;
}

.q-card {
  border-radius: 10px;
}
</style>
