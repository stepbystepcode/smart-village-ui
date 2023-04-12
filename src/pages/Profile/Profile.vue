<template>
  <q-page class="column bg">
    <div class="row items-center">
      <q-icon class="q-ma-lg" size="60px" name="img:/svg/user.svg"></q-icon>
      <router-link to="/user/login"><span class="login">{{isLogin?isLogin:"请登录"}}</span></router-link>
    </div>
    <div class="top-right">
      <q-btn round flat to="/chat"><q-icon name="support_agent"></q-icon></q-btn>
      <q-btn round flat><q-icon name="settings"></q-icon></q-btn>
    </div>
    <div class="column q-ma-lg">
      <q-card class="column">
        <div class="row">
          <q-btn v-for="i in 3" :key="i" class="q-px-none" style="flex:1" flat>
            <q-icon :name="btnList2[i - 1]"></q-icon><span>{{ btnListCh2[i - 1] }}</span>
          </q-btn>
        </div>
        <q-separator />
        <div class="row flex-center" style="    flex-wrap: nowrap;flex:1">
          <q-btn v-for="i in 5" :key="i" class="q-px-none q-py-sm" style="flex:1" flat>
            <template v-slot:default>
              <div class="text-center">
                <q-icon :name="btnList[i - 1]" />
                <div>{{ btnListCh[i - 1] }}</div>
              </div>
            </template>
          </q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script setup lang="ts">
//import axios from 'axios';
import {ref} from 'vue'
const btnList = ['credit_card', 'local_shipping', 'shopping_cart_checkout', 'sms', 'currency_exchange'];
const btnListCh = ['待付款', '待发货', '待收货', '待评价', '退款/售后'];
const btnList2 = ['star', 'house', 'history'];
const btnListCh2 = ['商品收藏', '店铺关注', '浏览记录'];
const isLogin=ref(false);
if (localStorage.getItem('auth')!=null) {
  const tokenParts = localStorage.getItem('auth')!.split('.');
  const username = JSON.parse(atob(tokenParts[1])).sub;
  isLogin.value=username
  //axios.post(`http://8.130.69.208:8080/api/user/${username}`,null,
  //{headers: {Authorization: `Bearer ${localStorage.getItem('auth')}`}
  //});
}
</script>
<style scoped lang="scss">
.login {
  font-size: 30px;
}

.top-right {
  position: absolute;
  top: 20px;
  right: 10px;
}

.bg {
  background-image: url('/img/profile-bg.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>

