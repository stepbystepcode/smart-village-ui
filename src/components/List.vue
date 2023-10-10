<template>
  <q-page class="column">
    <header class="fixed" style="z-index:99">
      <q-toolbar class="text-white rounded-borders" style="background:#ccc">
        <q-input class="search" dark hide-bottom-space borderless dense v-model="searchText"
          input-class="text-left text-black" style="background:#fff;border-radius:400px">
          <template v-slot:append>
            <q-icon class="q-pr-md text-grey" v-if="searchText === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer q-pr-md text-grey" @click="searchText = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </header>
    <ul class="column no-padding" style="margin-top: 60px">
      <li class="row no-wrap" v-for="(a, index) in data" :key="index"
        @click="router.push(`/shop/product/${route.query.type}/${goods[a-1].id}`)">
        <q-img style="min-width:50px;max-width:120px;border-radius:10px" height="120px" class="q-my-md q-mx-sm"
          :src="`/img/goods/${goods[a-1].id}.jpg`" />
        <div class="column q-pa-sm"><span class="text-h6">{{ goods[a-1].name }} </span>
          <div><span class="text-red text-h5" style="font-weight:500"><span style="font-size:17px">￥</span>{{ goods[a-1].price
          }}</span>
            <span class="text-grey q-ml-sm"> {{ goods[a-1].sales }}人付款</span>
          </div>
          <div><q-chip dense v-for="tag in goods[a-1].tags" :key="tag">{{ tag }}</q-chip></div>
          <div><q-chip dense class="">{{ goods[a-1].shop }} 进店 ></q-chip></div>
        </div>
      </li><q-separator />
    </ul>
  </q-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const headers = { Authorization: `Bearer ${localStorage.getItem('auth')}` };
const { data:goods } = await axios.get(
  `http://8.130.101.128:8080/api/data/goods/`,{ headers });
const apiUrl = 'http://8.130.101.128:8080/api/user/item/?type=' + route.query.type;
const response = await axios.get(apiUrl, { headers });
const data = response.data.reverse();
  // Do something with reversed data

const searchText = ref('');
//const filteredList = computed(() => {
    //return data.filter(item => item.name.includes(searchText.value));
//})

</script>
<style scoped lang="scss">
header {
  width: 100%;
  .q-toolbar label {
    width: 100%;
  }
}
</style>
