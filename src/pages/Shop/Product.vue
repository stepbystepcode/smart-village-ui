<template>
  <q-page class="column">
    <q-img height="360px" class="" :src="`/img/${route.params.type}/${route.params.id}.jpg`" />
    <BackBtn />
    <div class="q-ma-md column">
      <div class="text-red text-h6"> <span> ￥</span>
        <span class="text-h4">{{ product.price }}</span>
      </div>
      <span class="text-h5">{{ product.name }}</span>
      <span class="text-grey">月销{{ Math.floor(product.sales / 10) * 10 }}+</span>
      <span class="text-h6">{{ product.description }}</span>
    </div>
    <q-footer class="fixed row bg-white flex-center no-wrap" style="bottom:57px">
      <q-separator />
      <q-btn class="text-grey " unelevated>
        <div class="column">
          <q-icon name="shop"></q-icon>
          <span>店铺</span>
        </div>
      </q-btn>
      <q-btn class="text-grey " unelevated>
        <div class="column">
          <q-icon name="person"></q-icon>
          <span>客服</span>
        </div>
      </q-btn>
      <q-btn class="text-grey " unelevated>
        <div class="column">
          <q-icon name="star"></q-icon>
          <span>收藏</span>
        </div>
      </q-btn>
      <div style="border-radius:40px;height:38px;overflow:hidden"><q-btn class="bg-orange">加入购物车</q-btn><q-btn
          class="bg-red">立即购买</q-btn></div>
    </q-footer>
  </q-page>
</template>

<script setup lang="ts">
import BackBtn from '../../components/BackBtn.vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
const route = useRoute()
const response = await axios.post(
  `http://8.130.69.208:8080/api/data/${route.params.type}/${route.params.id[0]}`,
  { headers: { Authorization: `Bearer ${localStorage.getItem('auth')}` } }
);
const product=response.data[0];
</script>
<style scoped lang="scss"></style>
