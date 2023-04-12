<template>
  <q-page class="column">
    <!-- <div class="row bg-secondary flex-center header">
        <div class="column q-ma-md"><q-icon size="xl" name="o_account_balance" />党务公开</div>
        <div class="column q-ma-md"><q-icon size="xl" name="o_account_balance" />政务公开</div>
        <div class="column q-ma-md"><q-icon size="xl" name="o_account_balance" />财务公开</div>
      </div> -->
    <header>
      <q-toolbar class="bg-secondary text-white rounded-borders">
        <q-avatar
          class="q-ma-sm"
          size="40px"
          color="teal"
          text-color="white"
          icon="person"
          @click="router.push('/profile')"
        ></q-avatar>
        <q-input dark dense standout v-model="search" input-class="text-left">
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </header>

    <div class="q-pa-md">
      <q-carousel
        height="230px"
        style="border-radius: 20px"
        animated
        v-model="slide"
        navigation
        swipeable
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="/img/bg/1.jpg" />
        <q-carousel-slide :name="2" img-src="/img/bg/2.jpg" />
        <q-carousel-slide :name="3" img-src="/img/bg/3.jpg" />
      </q-carousel>
      <div class="q-mx-sm q-my-md row" style="flex: 1">
        <q-btn flat style="flex: 1" to="/mail" class="q-py-md card">
          <img src="/svg/mail.svg" style="width: 40px" alt="" />
          <span class="text-h6 q-pl-sm"> 书记信箱</span></q-btn
        >
      </div>
      <div class="row">
        <div class="row" style="flex: 1">
          <q-btn
            style="flex: 1"
            class="q-ma-sm card"
            to="/notice/notification"
            block
            flat
          >
            <template v-slot:default>
              <div class="text-center q-pa-sm">
                <img src="/svg/party.svg" style="width: 100px" alt="" />
                <div class="text-h6">党务公开</div>
              </div>
            </template>
          </q-btn>
        </div>
        <div style="flex: 1" class="column">
          <q-btn to="/notice/news" block class="top q-ma-sm card" flat style="flex: 1">
            <template v-slot:default>
              <div class="text-center q-pa-sm">
                <img src="/svg/gov.svg" style="width: 50px" alt="" />
                <div class="text-h6">政务公开</div>
              </div>
            </template>
          </q-btn>
          <q-btn
            to="/notice/country"
            block
            class="bottom q-ma-sm card"
            flat
            style="flex: 1"
          >
            <template v-slot:default>
              <div class="text-center q-pa-sm">
                <img src="/svg/money.svg" style="width: 50px" alt="" />
                <div class="text-h6">财务公开</div>
              </div>
            </template>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const slide = ref(1);
const autoplay = ref(true);
const search = ref('');
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient($secondary 10%, #e7e7e7 35%);
}
.card {
  background: #fff;
  border-radius: 10px;
}

.header {
  div {
    justify-self: center;
    align-items: center;
    color: white;
    font-size: 20px;
  }
}

.btn-group {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

header {
  .q-toolbar label {
    width: 100%;
  }
}
</style>
