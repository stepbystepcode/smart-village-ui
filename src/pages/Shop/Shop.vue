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
      <li class="row no-wrap" v-for="(a, index) in filteredList" :key="index"
        @click="router.push(`/shop/product/${route.query.type}/${a.id}`)">
        <q-img style="min-width:50px;max-width:120px;border-radius:10px" height="120px" class="q-my-md q-mx-sm"
          :src="`/img/${route.query.type}/${a.id}.jpg`" />
        <div class="column q-pa-sm"><span class="text-h6">{{ a.name }} </span>
          <div><span class="text-red text-h5" style="font-weight:500"><span style="font-size:17px">￥</span>{{ a.price
          }}</span>
            <span class="text-grey q-ml-sm"> {{ a.sales }}人付款</span>
          </div>
          <div><q-chip dense v-for="tag in a.tags" :key="tag">{{ tag }}</q-chip></div>
          <div><q-chip dense class="">{{ a.shop }} 进店 ></q-chip></div>
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
const { data } = await axios.post(
  `http://8.130.69.208:8080/api/data/${route.query.type}/`,
  { headers: { Authorization: `Bearer ${localStorage.getItem('auth')}` } }
);
const searchText = ref('');
const filteredList = computed(() => {
    return data.filter(item => item.name.includes(searchText.value));
})

</script>
<style scoped lang="scss">
header {
  width: 100%;

  .q-toolbar label {
    width: 100%;
  }
}
</style>
